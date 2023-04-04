import "swiper/css";
import "swiper/css/navigation";
import { processes } from "@utils";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@styles/home/Processes.module.css";
import { Swiper as SwiperType, Navigation } from "swiper";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

export default function Processes() {
  // Hooks
  const swiperRef = useRef<SwiperType>();
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <section className={styles.processes}>
      <p className={styles.title}>How it works</p>

      <Swiper
        spaceBetween={25}
        slidesPerView={1.25}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
      >
        {!swiperRef.current?.isBeginning && (
          <button
            className={styles.prev_button}
            onClick={() => {
              swiperRef.current?.slidePrev();
              setSlideIndex(swiperRef.current?.activeIndex as number);
            }}
          >
            <RiArrowLeftSLine />
          </button>
        )}

        {processes.map((process, index) => (
          <SwiperSlide key={index}>
            <div className={styles.process}>
              <div className={styles.icon}>
                <Image src={process.icon} width={100} height={100} alt="Icon" />
              </div>

              <p>{process.content}</p>
            </div>
          </SwiperSlide>
        ))}

        {!swiperRef.current?.isEnd && (
          <button
            className={styles.next_button}
            onClick={() => {
              swiperRef.current?.slideNext();
              setSlideIndex(swiperRef.current?.activeIndex as number);
            }}
          >
            <RiArrowRightSLine />
          </button>
        )}
      </Swiper>
    </section>
  );
}
