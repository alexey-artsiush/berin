import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import {useEffect} from "react";
import {getBasketGoods} from "@/redux/actions/actionCreator";

const Layout = ({ children }) => {
  const basketQuantity = useSelector(state => state.basket.basket.length);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getBasketGoods())
  },[]);
  return (
    <>
      <Header basketQuantity={basketQuantity}/>
      {children}
      <Footer />
    </>
  );
};

export default Layout;
