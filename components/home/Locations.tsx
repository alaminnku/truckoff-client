import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@utils";
import { useData } from "@contexts/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MouseEvent, useEffect, useRef, useState } from "react";
import styles from "@styles/home/Locations.module.css";
import { Swiper as SwiperType, Navigation } from "swiper";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function Locations() {
  // Hooks
  const swiperRef = useRef<SwiperType>();
  const { trucks, setFilteredTrucks } = useData();
  const [slideIndex, setSlideIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    window.innerWidth > 768 && setIsMobile(false);
  });

  // Search trucks
  function filterTrucks(location: string) {
    // Filter trucks
    setFilteredTrucks(() =>
      trucks.data.filter(
        (truck) => truck.location.toLowerCase() === location.toLowerCase()
      )
    );
  }

  return (
    <section className={styles.locations}>
      <p className={styles.title}>Explore by Location</p>

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

      <Swiper
        spaceBetween={25}
        slidesPerView={isMobile ? 1.25 : 3}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        modules={[Navigation]}
      >
        {locations.map((location, index) => (
          <SwiperSlide key={index}>
            <div className={styles.location}>
              <Link href="/trucks" onClick={() => filterTrucks(location[0])}>
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
      </Swiper>

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
    </section>
  );
}
