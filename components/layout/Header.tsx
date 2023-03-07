import { useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import styles from "@styles/layout/Header.module.css";

export default function Header() {
  // Hooks
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <DesktopNav />
      <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}
