import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@styles/home/Partners.module.css";

export default function Partners() {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth > 768 && setIsMobile(false);
  });

  return (
    <section className={styles.partners}>
      <Swiper
        autoplay={true}
        spaceBetween={100}
        slidesPerView={isMobile ? 2.5 : 4}
        modules={[Autoplay]}
        className={styles.swiper}
      >
        <SwiperSlide>
          <Image src="/truckoff-hero.png" width={200} height={100} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/truckoff-hero.png" width={200} height={100} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/truckoff-hero.png" width={200} height={100} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/truckoff-hero.png" width={200} height={100} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/truckoff-hero.png" width={200} height={100} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/truckoff-hero.png" width={200} height={100} alt="test" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src="/truckoff-hero.png" width={200} height={100} alt="test" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
}
