import type { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import type { Movie } from "@/types/movies";
import styles from "./carousel.module.scss";

type PropType = {
  movies: Movie[];
  options?: EmblaOptionsType;
};

const BASE_IMAGE_URL = import.meta.env.VITE_TMDB_IMAGE_BASE_URL;

export default function Carousel(props: PropType) {
  const { movies, options } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={styles.carousel}>
      <div className={styles.carousel_viewport} ref={emblaRef}>
        <div className={styles.carousel_container}>
          {movies.map((movie, idx) => (
            <div className={styles.carousel_slide} key={idx}>
              <img
                className={styles.carousel_slide_image}
                src={BASE_IMAGE_URL + movie.poster_path}
                alt={movie.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
