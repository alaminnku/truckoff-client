import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@styles/home/Partners.module.css";

export default function Partners() {
  const [isMobile, setIsMobile] = useState(true);

  // Partners logos
  const partners = [
    "/partners/anz.png",
    "/partners/commonwealth-bank.png",
    "/partners/macquare.png",
    "/partners/nab.png",
    "/partners/st-george.png",
    "/partners/westpac.png",
  ];

  useEffect(() => {
    window.innerWidth > 768 && setIsMobile(false);
  });

  return (
    <section className={styles.partners}>
      <Swiper
        autoplay={true}
        modules={[Autoplay]}
        slidesPerView={isMobile ? 3 : 6}
      >
        {partners.map((partner) => (
          <SwiperSlide>
            <Image
              src={partner}
              width={100}
              height={100}
              alt={`${partner} logo`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
