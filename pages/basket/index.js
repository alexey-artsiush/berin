import styles from "/styles/Basket.module.scss";
import BasketCard from "@/components/BasketCard";
import {useDispatch, useSelector} from "react-redux";
import {replaceBasket, setBasket} from "@/redux/reducers/basketReducer";

const Basket = () => {
  const dispatch = useDispatch()
  const basketState = useSelector(state => state.basket.basket)

  const removeProduct = id => {
    const newBasket = basketState.filter(el => el.id !== id)
    dispatch(replaceBasket(newBasket))
    localStorage.setItem("bag", JSON.stringify(newBasket))
  }

  console.log(basketState)

  return (
    <div className={styles.basket}>
      <div className={styles.basketWrapper}>
        <div className={styles.basketGoodsWrapper}>
          <div className={styles.title}>
            <h1>Your basket</h1>
          </div>
          <div className={styles.subtitle}>
            <div className={styles.productSection}>
              <h4>PRODUCT</h4>
            </div>
            <div className={styles.quantitySection}>
              <h4>QUANTITY</h4>
            </div>
            <div className={styles.totalSection}>
              <h4>TOTAL</h4>
            </div>
          </div>
          <div className={styles.line}></div>
          <div className={styles.basketList}>
            {basketState && basketState.length > 0?
              basketState.map((product)=> (
                  <BasketCard
                    product={product}
                    key={product.id}
                    onClick={() => removeProduct(product.id)}
                  />
                )
              ): <h3>Here is clear</h3> }
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
