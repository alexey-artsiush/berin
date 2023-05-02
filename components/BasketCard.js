import styles from "/styles/BasketCard.module.scss";
import Image from "next/image";

const BasketCard = ({ product }) => {
  console.log(product)
  return (
    <div className={styles.basketCard}>
      <div className={styles.product}>
        <div className={styles.image}>
          <Image src={product.image} height={180} width={180} alt="title-image"/>
        </div>
        <div className={styles.aboutGoods}>
          <div className={styles.name}>
            {product.name}
          </div>
          <div className={styles.price}>
            PRICE: {product.price} NIS
          </div>
          <div className={styles.size}>
            SIZE: {product.size}
          </div>
        </div>
      </div>
      <div className={styles.quantity}>
        {product.quantity}
      </div>
      <div className={styles.total}>
        {product.quantity * product.price} NIS
      </div>
    </div>
  );
};

export default BasketCard;
