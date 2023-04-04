import styles from "/styles/ProductImage.module.scss";
import Image from "next/image";
import product from "@/public/product/1.jpg";

const ProductImage = () => {
  return <div className={styles.productImage}>
    <Image src={product} alt="product" />
    <Image src={product} alt="product" />
    <Image src={product} alt="product" />
    <Image src={product} alt="product" />

  </div>;
};

export default ProductImage;
