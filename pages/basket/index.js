import styles from "/styles/Basket.module.scss";
import BasketCard from "@/components/BasketCard";
import {useDispatch, useSelector} from "react-redux";
import {replaceBasket, setBasket} from "@/redux/reducers/basketReducer";

const Basket = () => {
  const dispatch = useDispatch()
  const basketState = useSelector(state => state.basket.basket)
  console.log(basketState)

  const removeProduct = id => {
    const newBasket = basketState.filter(el => el.id !== id)
    dispatch(replaceBasket(newBasket))
    localStorage.setItem("bag", JSON.stringify(newBasket))
  }

  const handlePlusItem = (id) => {
    const newBasket = basketState.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          quantity: el.quantity + 1,
        };
      }
      return el;
    });
    dispatch(replaceBasket(newBasket));
    localStorage.setItem("bag", JSON.stringify(newBasket));
  };

  const handleMinusItem = (id) => {
    const newBasket = basketState.map((el) => {
      if (el.id === id) {
        return {
          ...el,
          quantity: el.quantity -1,
        };
      }
      return el;
    });
    dispatch(replaceBasket(newBasket));
    localStorage.setItem("bag", JSON.stringify(newBasket));
  };

  const total = basketState.reduce((acc, product) => {
    return acc + product.quantity * product.price;
  }, 0);

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
                    handlePlus={() => handlePlusItem(product.id)}
                    handleMinus={() => handleMinusItem(product.id)}
                  />
                )
              ): <h3>Here is clear</h3> }
          </div>
          <div className={styles.total}>
            SUBTOTAL: <span className={styles.subtotalNumber}>{total}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Basket;
