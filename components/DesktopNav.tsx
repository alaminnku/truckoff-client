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
          <Link href="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link href="/tech-stack">Tech stack</Link>
        </li>

        <li>
          <Link href="/contact">Contact</Link>
        </li>
      </ul>

      <div className={styles.github}>
        <a
          href="https://github.com/alaminnku"
          target="_blank"
          rel="noreferrer"
        ></a>
      </div>
    </nav>
  );
}
