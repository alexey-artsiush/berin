import Image from "next/image";
import styles from "../styles/Header.module.scss";
import logo from "/public/logo.webp";
import Link from "next/link";
import Footer from "@/components/Footer";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href={"/product"} text="WOMAN" />
        <Link href={"/product"} text="MAN" />
      </div>
      <div className={styles.logo}>
        <Image width="200" height="100" src={logo} alt="logo" />
      </div>
    </div>
  );
}

export default Header;
