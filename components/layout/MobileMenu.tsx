import Link from "next/link";
import { Dispatch, SetStateAction, useEffect } from "react";
import { currentYear } from "@utils";
import { GrMoney } from "react-icons/gr";
import { BiGroup } from "react-icons/bi";
import { BsTruck } from "react-icons/bs";
import { AiOutlineHome } from "react-icons/ai";
import styles from "@styles/layout/MobileMenu.module.css";

interface IMobileMenuProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

export default function MobileMenu({ isOpen, setIsOpen }: IMobileMenuProps) {
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
        <li onClick={() => setIsOpen(false)}>
          <Link href="/">
            <AiOutlineHome /> Home
          </Link>
        </li>

        <li onClick={() => setIsOpen(false)}>
          <Link href="/trucks">
            <BsTruck /> Trucks
          </Link>
        </li>

        <li onClick={() => setIsOpen(false)}>
          <Link href="/finance">
            <GrMoney /> Finance
          </Link>
        </li>

        <li onClick={() => setIsOpen(false)}>
          <Link href="/about-us">
            <BiGroup /> About Us
          </Link>
        </li>
      </ul>

      <p className={styles.copyright}>
        &copy; {currentYear} TruckOff Pty Ltd. <br /> Sydney, Australia.
      </p>
    </div>
  );
}
