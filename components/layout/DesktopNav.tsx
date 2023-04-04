import Link from "next/link";
import styles from "@styles/layout/DesktopNav.module.css";

export default function DesktopNav() {
  return (
    <nav className={styles.desktop_nav}>
      <div className={styles.logo}>
        <Link href="/">TruckOff</Link>
      </div>

      <ul className={styles.navigation}>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="#">About Us</Link>
        </li>
        <li>
          <Link href="/trucks">Trucks</Link>
        </li>

        <li>
          <Link href="#">Finance</Link>
        </li>
      </ul>
    </nav>
  );
}
