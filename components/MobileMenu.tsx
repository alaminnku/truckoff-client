import Link from "next/link";
import { useEffect } from "react";
import { GrMoney } from "react-icons/gr";
import { BiGroup } from "react-icons/bi";
import { AiOutlineHome } from "react-icons/ai";
import styles from "@styles/MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
  // Current year
  const currentYear = new Date().getFullYear();

  // Disable body scroll if MobileMenu is open
  useEffect(() => {
    const body = document.querySelector("body");

    if (body) {
      isOpen
        ? (body.style.overflow = "hidden")
        : (body.style.overflow = "visible");
    }
  });

  return (
    <div className={`${styles.mobile_menu} ${isOpen && styles.open}`}>
      <ul className={styles.nav_items}>
        <li>
          <a href="/">
            <AiOutlineHome /> Home
          </a>
        </li>

        <li>
          <Link href="/finance">
            <GrMoney /> Finance
          </Link>
        </li>

        <li>
          <Link href="/about-us">
            <BiGroup /> About Us
          </Link>
        </li>
      </ul>

      <p className={styles.copyright}>
        Copyright &copy; {currentYear} TruckOff. <br /> All rights reserved.
      </p>
    </div>
  );
}
