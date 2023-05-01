import styles from "/styles/Basket.module.scss";
import BasketCard from "@/components/BasketCard";
import image from "/public/product/1.jpg";

const Basket = () => {
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
          <BasketCard name={"Bereshit T-Shirt"} quantity={1} price={199} size={"M"} image={image} />
        </div>
      </div>
    </div>
  );
};

export default Basket;
