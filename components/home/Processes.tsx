import "swiper/css";
import "swiper/css/navigation";
import { processes } from "@utils";
import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@styles/home/Processes.module.css";
import { Swiper as SwiperType, Navigation } from "swiper";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Image from "next/image";

export default function Processes() {
  // Hooks
  const swiperRef = useRef<SwiperType>();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth > 1024 && setIsMobile(false);
  });

  return (
    <section className={styles.processes}>
      <p className={styles.title}>How it works</p>

      <Swiper
        spaceBetween={25}
        slidesPerView={isMobile ? 1.25 : 4}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
      >
        {!swiperRef.current?.isBeginning && isMobile && (
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

        {!swiperRef.current?.isEnd && isMobile && (
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
