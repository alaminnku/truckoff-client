import "swiper/css";
import "swiper/css/autoplay";
import Link from "next/link";
import Image from "next/image";
import { Autoplay } from "swiper";
import { brandIcons } from "@utils";
import { useData } from "@contexts/Data";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "@styles/home/Brands.module.css";

export default function Brands() {
  // Hooks
  const { trucks, setFilteredTrucks } = useData();
  const [isMobile, setIsMobile] = useState(true);

  // Check view port width
  useEffect(() => {
    window.innerWidth > 1024 && setIsMobile(false);
  });

  // Filter trucks
  function filterTrucks(brand: string) {
    setFilteredTrucks(() =>
      trucks.data.filter(
        (truck) =>
          truck.make?.toLowerCase() === brand ||
          truck.name.toLowerCase().includes(brand)
      )
    );
  }

  return (
    <section className={styles.brands}>
      <Swiper
        autoplay={true}
        modules={[Autoplay]}
        slidesPerView={isMobile ? 3 : 8.5}
      >
        {brandIcons.map((brandIcon) => (
          <SwiperSlide className={styles.images}>
            <Image
              src={brandIcon.grayed}
              width={100}
              height={100}
              className={styles.grayed}
              alt={`${brandIcon.grayed
                .replace("/brands/", "")
                .replace("-", " ")
                .replace(".png", "")} icon`}
            />

            <Link href="/trucks" onClick={() => filterTrucks(brandIcon.brand)}>
              <Image
                src={brandIcon.colored}
                width={100}
                height={100}
                className={styles.colored}
                alt={`${brandIcon.colored
                  .replace("/brands/", "")
                  .replace("-", " ")
                  .replace(".png", "")} icon`}
              />
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
