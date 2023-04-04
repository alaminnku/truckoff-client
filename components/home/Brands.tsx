import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay } from "swiper";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@styles/home/Swiper.module.css";

export default function Brands() {
  // Hooks
  const [isMobile, setIsMobile] = useState(true);

  // Check view port width
  useEffect(() => {
    window.innerWidth > 1024 && setIsMobile(false);
  });

  return (
    <section>
      <Swiper
        autoplay={true}
        spaceBetween={80}
        slidesPerView={isMobile ? 2.5 : 6}
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
