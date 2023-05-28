import styles from "/styles/BasketCard.module.scss";
import Image from "next/image";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import Link from "next/link";
import {Button, TextField} from "@mui/material";

const BasketCard = ({ product, onClick, handlePlus, handleMinus }) => {
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
        <Button
          variant="text"
          color="default"
          onClick={handleMinus}
        >
          -
        </Button>
        <TextField
          color="default"
          id="standard-basic"
          variant="standard"
          value={product.quantity}
          sx={{
            width: 50
          }}
          InputProps={{
            inputProps: {
              style: { textAlign: "center", width: "100%" },
            }
          }}
        />
        <Button
          variant="text"
          color="default"
          onClick={handlePlus}
        >
          +
        </Button>
      </div>
      <div className={styles.total}>
        {product.quantity * product.price} NIS
        <DeleteOutlineIcon className={styles.trashIcon} onClick={onClick} />
      </div>
    </div>
  );
};

export default BasketCard;
