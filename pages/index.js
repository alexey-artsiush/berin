import Button from "/components/Button";
import styles from "/styles/Home.module.scss";
import Article from "@/components/Article";
import ProductImage from "@/components/ProductImage";
import ProductOptions from "@/components/ProductOptions";
import Header from "@/components/Header";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Header />

      <Article
        title="Text title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis."
      />
    </div>
  );
};

export default Home;
