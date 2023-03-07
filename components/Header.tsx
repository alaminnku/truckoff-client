import { useState } from "react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import MobileMenu from "./MobileMenu";
import styles from "@styles/Header.module.css";

export default function Header() {
  // Hooks
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className={styles.header}>
      <DesktopNav />
      <MobileMenu isOpen={isOpen} />
      <MobileNav setIsOpen={setIsOpen} isOpen={isOpen} />
    </header>
  );
}
