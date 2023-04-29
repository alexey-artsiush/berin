import Button from "/components/Button";
import styles from "/styles/Home.module.scss";
import Article from "@/components/Article";
import ProductImage from "@/components/ProductImage";
import ProductOptions from "@/components/ProductOptions";

const Product = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.productWrapper}>
        <div className={styles.productImagesWrapper}>
          <ProductImage />
        </div>
        <div className={styles.productOptionsWrapper}>
          <ProductOptions />
        </div>
      </div>
      <Article
        title="Text title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis."
      />
    </div>
  );
};

export default Product;
