import Header from "../components/Header";
import Footer from "../components/Footer";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getBasketGoods} from "@/api";
import {replaceBasket} from "@/redux/reducers/basketReducer";

const Layout = ({ children }) => {
  const dispatch = useDispatch()
  const basket = useSelector(state => state.basket.basket)

  useEffect(() => {
    const basket = getBasketGoods()
    dispatch(replaceBasket(basket))
  }, [])

  return (
    <>
      <Header basketQuantity={basket.length}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
