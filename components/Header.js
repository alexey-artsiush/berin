import Image from "next/image";
import styles from "../styles/Header.module.scss";
import Logo from "/public/logo.webp";
import Basket from "/public/icons/basket.svg";
import Link from "next/link";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link className={styles.navLink} href="/product">WOMAN</Link>
        <Link className={styles.navLink}href="/product">MAN</Link>
      </div>
      <div className={styles.logo}>
        <Link className={styles.navLink} href="/">
          <Image src={Logo} alt="logo" />
        </Link>
      </div>
      <div className={styles.basket}>
        <Link className={styles.navLink} href="/basket">
          <Basket className={styles.basketLogo} />
        </Link>
      </div>
    </div>
  );
}
export default Header;
