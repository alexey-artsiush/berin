import styles from "/styles/Home.module.scss";
import Article from "@/components/Article";
import IntroImage from "/public/main.webp";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.homePage}>
      <Image className={styles.introImage} src={IntroImage} alt="main-image" />
      <Article
        title="Text title"
        description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis dolor sit amet, consectetur adipisicing elit. Nesciunt, officiis."
      />
    </div>
  );
};

export default Home;
