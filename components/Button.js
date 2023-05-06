import styles from "/styles/Button.module.css";

const Button = ({ onClick, text, id, className, disabled }) => {
  return (
    <button className={className} id={id} onClick={onClick} disabled={disabled}>
      {text}
    </button>
  );
};

export default Button;
