import Image from "next/image";
import instagram from "/public/icons/instagram.svg";
import telegram from "/public/icons/telegram.svg";
import facebook from "/public/icons/facebok.svg";
import phone from "/public/icons/phone.svg";
import whatsapp from "/public/icons/whatsapp.svg";
import styles from "/styles/Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.contacts}>
        <div className={styles.contact}>
          <span className={styles.phone}>
            <Image src={phone} alt="insta-logo" /> +9725 000000000
          </span>
          <span className={styles.schedule}>10-20 Monday through Friday </span>
        </div>
        <div className={styles.contact}>
          <span className={styles.phone}>
            <Image src={whatsapp} alt="insta-logo" /> +9725 00000000
          </span>
          <span className={styles.schedule}>10-20 Monday through Friday </span>
        </div>
      </div>

      <div>
        <div className={styles.social}>
          <div className={styles.socialIcon}>
            <Image src={instagram} alt="insta-logo" />
          </div>
          <div className={styles.socialIcon}>
            <Image src={telegram} alt="telegram-logo" />
          </div>
          <div className={styles.socialIcon}>
            <Image src={facebook} alt="facebook-logo" />
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
