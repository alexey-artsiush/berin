import styles from "/styles/BasketCard.module.scss";
import Image from "next/image";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Link from "next/link";

const BasketCard = ({ product, onClick }) => {
  return (
    <div className={styles.basketCard}>
      <div className={styles.product}>
        <div className={styles.image}>
          <Image src={product.image} height={180} width={180} alt="title-image"/>
        </div>
        <div className={styles.aboutGoods}>
          <Link className={styles.name} href="/product">
            {product.name}
          </Link>
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
        <DeleteOutlineIcon className={styles.trashIcon} onClick={onClick} />
      </div>
    </div>
  );
};

export default BasketCard;
