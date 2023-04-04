import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@utils";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import styles from "@styles/home/Locations.module.css";
import { Swiper as SwiperType, Navigation } from "swiper";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function Locations() {
  // Hooks
  const swiperRef = useRef<SwiperType>();
  const [slideIndex, setSlideIndex] = useState(0);

  return (
    <section className={styles.locations}>
      <p className={styles.title}>Explore by Location</p>

      <Swiper
        spaceBetween={25}
        slidesPerView={1.25}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
      >
        <button
          className={styles.prev_button}
          disabled={slideIndex === 0}
          onClick={() => {
            swiperRef.current?.slidePrev();
            setSlideIndex(swiperRef.current?.activeIndex as number);
          }}
        >
          <RiArrowLeftSLine />
        </button>

        {locations.map((location, index) => (
          <SwiperSlide key={index}>
            <div className={styles.location}>
              <Link href="/trucks">
                <Image
                  src="/truckoff-hero.png"
                  width={100}
                  height={100}
                  alt="Truck image"
                />

                <div className={styles.content}>
                  <p>{location[1]}</p>

                  <p>
                    Show truck
                    <AiOutlineArrowRight />
                  </p>
                </div>
              </Link>
            </div>
          </SwiperSlide>
        ))}

        <button
          className={styles.next_button}
          disabled={swiperRef.current?.isEnd}
          onClick={() => {
            swiperRef.current?.slideNext();
            setSlideIndex(swiperRef.current?.activeIndex as number);
          }}
        >
          <RiArrowRightSLine />
        </button>
      </Swiper>
    </section>
  );
}
