import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import type { EmblaOptionsType } from "embla-carousel";
import styles from "./CommonCarousel.module.scss";

type CarouselProps<T> = {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  options?: EmblaOptionsType;
  className?: string;
};

export default function CommonCarousel<T>({
  items,
  renderItem,
  options,
  className
}: CarouselProps<T>) {
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={clsx(styles.carousel, className)}>
      <div className={styles.carousel_viewport} ref={emblaRef}>
        <div className={styles.carousel_container}>
          {items.map((item, index) => (
            <div className={styles.carousel_slide} key={index}>
              {renderItem(item, index)}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
