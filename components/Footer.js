import Image from 'next/image'
import A from "./A";
import styles from '../styles/Footer.module.scss'

export default function Header() {
  return (
    <div className={styles.footer}>
      <div className={styles.nav}>
        <A href={'/product'} text="WOMAN"/>
        <A href={'/product'} text="MAN"/>
      </div>
      <div className={styles.logo}>
        <Image width="200" height="100" src="/logo.png" alt="logo"/>
      </div>
    </div>
  )
}
