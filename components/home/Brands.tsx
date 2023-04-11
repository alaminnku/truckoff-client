import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay } from "swiper";
import { brandIcons } from "@utils";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@styles/home/Brands.module.css";

export default function Brands() {
  // Hooks
  const [isMobile, setIsMobile] = useState(true);

  // Check view port width
  useEffect(() => {
    window.innerWidth > 1024 && setIsMobile(false);
  });

  return (
    <section className={styles.brands}>
      <Swiper
        autoplay={true}
        modules={[Autoplay]}
        slidesPerView={isMobile ? 3 : 8.5}
      >
        {brandIcons.map((brandIcon) => (
          <SwiperSlide className={styles.images}>
            <Image
              src={brandIcon.grayed}
              width={100}
              height={100}
              className={styles.grayed}
              alt={`${brandIcon.grayed
                .replace("/brands/", "")
                .replace("-", " ")
                .replace(".png", "")} icon`}
            />

            <Image
              src={brandIcon.colored}
              width={100}
              height={100}
              className={styles.colored}
              alt={`${brandIcon.colored
                .replace("/brands/", "")
                .replace("-", " ")
                .replace(".png", "")} icon`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
