import Link from "next/link";
import { Dispatch, SetStateAction } from "react";
import styles from "@styles/MobileNav.module.css";

interface MobileNavProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileNav({ isOpen, setIsOpen }: MobileNavProps) {
  return (
    <nav className={styles.mobile_nav}>
      <div className={styles.logo}>
        <Link href="/">TruckOff</Link>
      </div>

      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.hamburger} ${isOpen && styles.open}`}
      >
        <div className={styles.line}></div>
      </div>
    </nav>
  );
}
