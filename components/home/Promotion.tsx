import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@styles/home/Promotion.module.css";

export default function Promotion() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth > 1024 && setIsMobile(false);
  });

  return isMobile ? (
    <section className={styles.promotion}>
      <h2>Tell the others to TruckOff and get pre approved with us!</h2>

      <Image
        src="/images/promotion.png"
        width={800}
        height={800}
        alt="Truck image"
      />

      <p>
        Our team can assist you in sourcing the vehicle finance that you require
        through our partnership with Australia largest independent assest
        finance provider. Contact us to learn more about how we can help you
      </p>
    </section>
  ) : (
    <section className={styles.promotion}>
      <div className={styles.content}>
        <h2>Tell the others to TruckOff and get pre approved with us!</h2>

        <p>
          Our team can assist you in sourcing the vehicle finance that you
          require through our partnership with Australia largest independent
          assest finance provider. Contact us to learn more about how we can
          help you
        </p>
      </div>

      <Image
        src="/truckoff-hero.png"
        width={100}
        height={100}
        alt="Truck image"
      />
    </section>
  );
}
