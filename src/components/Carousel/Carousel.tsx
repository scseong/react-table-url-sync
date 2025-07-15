import { useEffect } from "react";
import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useDotButton } from "@/hooks/useDotButton";
import DotButton from "./DotButton";
import styles from "./carousel.module.scss";

type PropType<T> = {
  slides: T[];
  options?: EmblaOptionsType;
};

export default function Carousel<T>(props: PropType<T>) {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options, [Autoplay()]);
  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(emblaApi);

  useEffect(() => {
    if (emblaApi) {
      console.log(emblaApi.slideNodes());
    }
  }, [emblaApi]);

  return (
    <div className={styles.carousel} ref={emblaRef}>
      <div className={styles.carousel_container}>
        <div className={styles.carousel_silde}>
          {slides.map((slide, idx) => (
            <div className="embla__slide" key={idx}>
              <div className="embla__slide__number">
                <img src={`/images/banner_${idx + 1}.jpg`} alt="" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={"embla__dot".concat(index === selectedIndex ? " embla__dot--selected" : "")}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
