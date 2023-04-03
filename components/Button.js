import classNames from "classnames";
import styles from "/styles/Button.module.css";

const Button = ({ onClick, color = "red", text, id, size = "s" }) => {
  const btnClass = classNames({
    btn: true,
    "btn--color": color === "red",
    "btn--small": size === "s",
    "btn--medium": size === "m",
  });
  return (
    <button className={styles.btnClass} id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
