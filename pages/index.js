import Button from "/components/Button";
import styles from "/styles/Home.module.css";

const Home = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <Button size="s" color="red" text="Buy Now" />
      </div>
    </div>
  );
};

export default Home;
