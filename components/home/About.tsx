import styles from "@styles/home/About.module.css";

export default function About() {
  return (
    <section className={styles.about}>
      <div className={styles.title}>
        <h2>
          Looking for a truck? <br /> don’t truck around.
        </h2>
        <div className={styles.color}></div>
      </div>

      <p>
        TruckOff is your one stop shop finding the best deals in Australia.
        We’re gathered listings from dealers sellers the country. So you can
        easly compare prices and features in one place.
      </p>
    </section>
  );
}
