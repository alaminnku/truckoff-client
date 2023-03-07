import Link from "next/link";
import styles from "@styles/DesktopNav.module.css";

export default function DesktopNav() {
  return (
    <nav className={styles.desktop_nav}>
      <div className={styles.logo}>
        <Link href="/">TruckOff</Link>
      </div>

      <ul className={styles.navigation}>
        <li>
          <Link href="/finance">Finance</Link>
        </li>

        <li>
          <Link href="/about-us">About Us</Link>
        </li>

        <li>
          <Link href="/">Home</Link>
        </li>
      </ul>
    </nav>
  );
}
