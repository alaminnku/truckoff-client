import Link from "next/link";
import { CiFacebook } from "react-icons/ci";
import { AiOutlineInstagram } from "react-icons/ai";
import styles from "@styles/layout/Footer.module.css";
import { currentYear } from "@utils";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.items}>
        <div className={styles.item}>
          <Link href="/" className={styles.logo}>
            TruckOff
          </Link>
          <p className={styles.about}>
            Lorem ipsum dolor sit amet consectetur. Vel sapien accumsan eleifend
            faucibus sed urna sagittis.{" "}
          </p>
          <div className={styles.social}>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noreferrer"
            >
              <AiOutlineInstagram />
            </a>
            <a
              href="https://www.facebook.com/"
              target="_blank"
              rel="noreferrer"
            >
              <CiFacebook />
            </a>
          </div>
        </div>

        <div className={styles.item}>
          <p className={styles.title}>Get Help</p>

          <div className={styles.navigation}>
            <Link href="#">Sitemap</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms & Conditions</Link>
          </div>
        </div>

        <div className={styles.item}>
          <p className={styles.title}>Contact Details</p>

          <div className={styles.navigation}>
            <p>York St, Sydney NSW 2000</p>
            <a href="mailto:info@truckoff.com.au">info@truckoff.com.au</a>
            <a href="tel:+61 434 506 505">+61 434 506 505</a>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        <p>Sydney, Australia.</p>
        <p>&copy; {currentYear} TruckOff Pty Ltd.</p>
      </div>
    </footer>
  );
}
