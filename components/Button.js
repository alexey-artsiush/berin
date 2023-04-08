import styles from "/styles/Button.module.css";

const Button = ({ onClick, text, id, className }) => {
  return (
    <button className={className} id={id} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
