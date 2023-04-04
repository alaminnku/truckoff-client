import styles from "@styles/home/Stats.module.css";

export default function Stats() {
  return (
    <section className={styles.stats}>
      <div className={styles.content}>
        <div className={styles.item}>
          <p>5,000+</p>
          <p>Trucks each month</p>
        </div>
        <div className={styles.item}>
          <p>100+</p>
          <p>Year industry experience</p>
        </div>
        <div className={styles.item}>
          <p>$12.5bn</p>
          <p>Worth of trucks per month</p>
        </div>
      </div>
    </section>
  );
}
