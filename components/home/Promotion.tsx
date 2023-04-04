import Image from "next/image";
import styles from "@styles/home/Promotion.module.css";

export default function Promotion() {
  return (
    <section className={styles.promotion}>
      <h2>Tell the others to TruckOff and get pre approved with us!</h2>

      <Image
        src="/truckoff-hero.png"
        width={100}
        height={100}
        alt="Truck image"
      />

      <p>
        Our team can assist you in sourcing the vehicle finance that you require
        through our partnership with Australia largest independent assest
        finance provider. Contact us to learn more about how we can help you
      </p>
    </section>
  );
}
