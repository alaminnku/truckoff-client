import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@styles/home/Brands.module.css";

export default function Brands() {
  // Hooks
  const [isMobile, setIsMobile] = useState(true);

  // Brand icons
  const brandIcons = [
    "/brands/ford.png",
    "/brands/freightliner.png",
    "/brands/fuso.png",
    "/brands/hino.png",
    "/brands/isuzu.png",
    "/brands/iveco.png",
    "/brands/kenworth.png",
    "/brands/mack.png",
    "/brands/mercedes-benz.png",
    "/brands/mitsubishi.png",
    "/brands/toyota.png",
    "/brands/volvo.png",
    "/brands/western-star.png",
  ];

  // Check view port width
  useEffect(() => {
    window.innerWidth > 1024 && setIsMobile(false);
  });

  return (
    <section className={styles.brands}>
      <Swiper
        autoplay={true}
        modules={[Autoplay]}
        slidesPerView={isMobile ? 3 : 8}
      >
        {brandIcons.map((brandIcon) => (
          <SwiperSlide>
            <Image
              src={brandIcon}
              width={100}
              height={100}
              alt={`${brandIcon.split("/")[2].split(".png")[0]} icon`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
