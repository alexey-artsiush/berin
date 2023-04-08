import styles from "/styles/ProductImage.module.scss";
import Image from "next/image";
import product1 from "@/public/product/1.jpg";
import product2 from "@/public/product/2.jpg";
import product3 from "@/public/product/3.jpg";
import product4 from "@/public/product/4.jpg";

const ProductImage = () => {
  return <div className={styles.productImage}>
    <Image src={product1} width={600} height={600} alt="product" />
    <Image src={product2} width={600} height={600} alt="product" />
    <Image src={product3} width={600} height={600} alt="product" />
    <Image src={product4} width={600} height={600} alt="product" />
  </div>;
};

export default ProductImage;
