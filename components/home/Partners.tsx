import "swiper/css";
import "swiper/css/autoplay";
import Image from "next/image";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@styles/home/Partners.module.css";

export default function Partners() {
  return (
    <section>
      Partner swapper
      <Swiper
        autoplay={true}
        spaceBetween={100}
        slidesPerView={2.5}
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
