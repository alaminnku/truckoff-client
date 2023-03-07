import Link from "next/link";
import { useEffect } from "react";
import styles from "@styles/MobileMenu.module.css";

interface MobileMenuProps {
  isOpen: boolean;
}

export default function MobileMenu({ isOpen }: MobileMenuProps) {
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
          <a className={styles.WhatsApp} href="/hello" target="_blank">
            WhatsApp Us
          </a>
        </li>

        <li>
          <Link href="/services">Services</Link>
        </li>

        <li>
          <Link href="/portfolio">Portfolio</Link>
        </li>

        <li>
          <Link href="/tools">Tools</Link>
        </li>

        <li>
          <Link href="/about-us">About Us</Link>
        </li>

        <li>
          <Link href="/insights">Insights</Link>
        </li>

        <li>
          <Link href="/contact-us">Contact Us</Link>
        </li>

        <li>
          <Link href="/request-a-quote">Request a Quote</Link>
        </li>
      </ul>
    </div>
  );
}
