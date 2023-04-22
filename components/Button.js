import classNames from "classnames";
import styles from '../styles/Header.module.scss'

export const Button = ({onClick, color, text, id, size = 's'}) => {
  const btnClass = classNames({
    'btn':true,
    'btn--color': color === 'red',
    'btn--small': size === 's',
    'btn--medium': size === 'm',
  })
  return (
    <button className={styles.btnClass} id={id} onClick={onClick}>
      {text}
    </button>
  )
}
