import styles from "/styles/BasketCard.module.scss";
import Image from "next/image";

const BasketCard = ({name="Bereshit T-Shirt", price=199, quantity=1, size="M", image}) => {
  return (
    <div className={styles.basketCard}>
      <div className={styles.product}>
        <div className={styles.image}>
          <Image src={image} height={180} />
        </div>
        <div className={styles.aboutGoods}>
          <div className={styles.name}>
            {name}
          </div>
          <div className={styles.price}>
            PRICE: {price} NIS
          </div>
          <div className={styles.size}>
            SIZE: {size}
          </div>
        </div>
      </div>
      <div className={styles.quantity}>
        {quantity}
      </div>
      <div className={styles.total}>
        {quantity * price} NIS
      </div>
    </div>
  );
};

export default BasketCard;
