import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { processes } from "@utils";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@styles/home/Processes.module.css";

export default function Processes() {
  // Hooks
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth > 1024 && setIsMobile(false);
  });

  return (
    <section className={styles.processes}>
      <p className={styles.title}>How it works</p>

      <Swiper spaceBetween={25} slidesPerView={isMobile ? 1.25 : 4}>
        {processes.map((process, index) => (
          <SwiperSlide key={index}>
            <div className={styles.process}>
              <div
                className={`${styles.icon} ${
                  styles[process.icon.split("/")[2].split(".png")[0]]
                }`}
              >
                <Image src={process.icon} width={100} height={100} alt="Icon" />
              </div>

              <p>{process.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
