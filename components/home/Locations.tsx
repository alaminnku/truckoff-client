import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import Link from "next/link";
import { locations } from "@utils";
import { useData } from "@contexts/Data";
import { Swiper, SwiperSlide } from "swiper/react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { MouseEvent, useRef, useState } from "react";
import styles from "@styles/home/Locations.module.css";
import { Swiper as SwiperType, Navigation } from "swiper";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

export default function Locations() {
  // Hooks
  const swiperRef = useRef<SwiperType>();
  const { trucks, setFilteredTrucks } = useData();
  const [slideIndex, setSlideIndex] = useState(0);

  // Search trucks
  function filterTrucks(
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    location: string
  ) {
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

        {locations.map((location, index) => (
          <SwiperSlide key={index}>
            <div className={styles.location}>
              <Link
                href="/trucks"
                onClick={(e) => filterTrucks(e, location[0])}
              >
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
