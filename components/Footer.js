import Image from "next/image";
import Instagram from "/public/icons/instagram.svg";
import Telegram from "/public/icons/telegram.svg?url";
import Facebook from "/public/icons/facebok.svg?url";
import Phone from "/public/icons/phone.svg?url";
import Whatsapp from "/public/icons/whatsapp.svg?url";
import styles from "/styles/Footer.module.scss";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <span className={styles.phone}>
            <Image src={Phone} alt="phone-logo" /> +9725 000000000
          </span>
          <span className={styles.schedule}>10-20 Monday through Friday </span>
        </div>
        <div className={styles.contact}>
          <span className={styles.phone}>
            <Image src={Whatsapp} alt="whatsapp-logo" /> +9725 00000000
          </span>
          <span className={styles.schedule}>10-20 Monday through Friday </span>
        </div>
      </div>

      <div>
        <div className={styles.social}>
          <div className={styles.socialIcon}>
            <Link className={styles.navLink} href=" https://www.instagram.com/berin.bless/">
              <Instagram />
            </Link>
          </div>
          <div className={styles.socialIcon}>
            <Image src={Telegram} alt="telegram-logo" />
          </div>
          <div className={styles.socialIcon}>
            <Image src={Facebook} alt="facebook-logo" />
          </div>
        </div>
      </div>

      <div className={styles.line}></div>

      <div className={styles.copyright}>
        Copyright © 2023, All rights reserved
      </div>
    </footer>
  );
};

export default Footer;
