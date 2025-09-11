import { Link } from "react-router-dom";
import useEmblaCarousel from "embla-carousel-react";
import clsx from "clsx";
import { formatDate } from "@/utils/date";
import type { EmblaOptionsType } from "embla-carousel";
import { BASE_IMAGE_URL } from "@/constants/url";
import type { Movie } from "@/types/movies";
import styles from "./carousel.module.scss";

type PropType = {
  movies: Movie[];
  options?: EmblaOptionsType;
  className?: string;
};

export default function Carousel(props: PropType) {
  const { movies, options, className } = props;
  const [emblaRef] = useEmblaCarousel(options);

  return (
    <div className={clsx(styles.carousel, className)}>
      <div className={styles.carousel_viewport} ref={emblaRef}>
        <div className={styles.carousel_container}>
          {movies.map((movie, idx) => (
            <div className={styles.carousel_slide} key={idx}>
              <Link to={`/movies/${movie.id}`}>
                <div>
                  <img
                    className={styles.carousel_slide_image}
                    src={BASE_IMAGE_URL + movie.poster_path}
                    alt={movie.title}
                  />
                </div>
                <div className={styles.movie_info}>
                  <h3 title={movie.title}>{movie.title}</h3>
                  <p>{formatDate(movie.release_date, "monthDayYear")}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
