import Button from "/components/Button";
import styles from "/styles/Home.module.css";
import Article from "@/components/Article";
import ProductImage from "@/components/ProductImage";
import ProductOptions from "@/components/ProductOptions";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <div className={styles.productWrapper}>
        <ProductOptions>
          <Button size="s" color="red" text="Buy Now" />
        </ProductOptions>
        <ProductImage />
      </div>
      <Article
        title="Text title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis."
      />
    </div>
  );
};

export default Home;
