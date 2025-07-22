import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import styles from "./carousel.module.scss";

type PropType = {
  slides: { imageUrl: string }[];
  options?: EmblaOptionsType;
};

export default function Carousel(props: PropType) {
  const { slides, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_viewport} ref={emblaRef}>
        <div className={styles.carousel_container}>
          {slides.map((slide, idx) => (
            <div className={styles.carousel_slide} key={idx}>
              <img className={styles.carousel_slide_image} src={slide.imageUrl} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
