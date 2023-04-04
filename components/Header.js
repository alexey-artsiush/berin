import Image from "next/image";
import styles from "../styles/Header.module.scss";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.nav}>
        <Link href={"/product"} text="WOMAN" />
        <Link href={"/product"} text="MAN" />
      </div>
      <div className={styles.logo}>
        <Image width="200" height="100" src="/logo.png" alt="logo" />
      </div>
    </div>
  );
}
