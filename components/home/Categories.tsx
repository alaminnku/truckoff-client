import styles from "@styles/home/Categories.module.css";

export default function Categories() {
  return (
    <section className={styles.categories}>
      <h2>Browse by make</h2>

      <div className={styles.items}>
        <div className={styles.item}>
          <p>Ford</p>
        </div>
        <div className={styles.item}>
          <p>Freightliner</p>
        </div>
        <div className={styles.item}>
          <p>Fuso</p>
        </div>
        <div className={styles.item}>
          <p>Hino</p>
        </div>
      </div>

      <button>See More</button>
    </section>
  );
}
