import styles from "/styles/Article.module.scss";

const Article = ({ title, description }) => {
  return (
    <div className={styles.article}>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default Article;
