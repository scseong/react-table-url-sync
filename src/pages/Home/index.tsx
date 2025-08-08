import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import type { EmblaOptionsType } from "embla-carousel";
import Carousel from "@/components/Carousel/Carousel";
import CarouselWithOpacity from "@/components/Carousel/CarouselWithOpacity";
import getPopularMovies from "@/apis/getPopularMovies";
import getUpcomingMovies from "@/apis/getUpcomingMovies";
import getTopRatedMovies from "@/apis/getTopRatedMovies";
import type { Movie } from "@/types/movies";
import styles from "./index.module.scss";

const OPTIONS: EmblaOptionsType = { loop: true };

export default function Home() {
  const [movies, setMovies] = useState({
    popularMovies: [] as Movie[],
    upcomingMovies: [] as Movie[],
    topRatedMovies: [] as Movie[]
  });

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const [popularMovies, upcomingMovies, topRatedMovies] = await Promise.all([
          getPopularMovies(),
          getUpcomingMovies(),
          getTopRatedMovies()
        ]);
        setMovies((prev) => ({ ...prev, popularMovies, upcomingMovies, topRatedMovies }));
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <>
      <section aria-label="popular" className={styles.popular}>
        <CarouselWithOpacity movies={movies.popularMovies.slice(0, 5)} options={OPTIONS} />
      </section>
      <section aria-label="New">
        <div className={styles.section_title}>
          <h2>New</h2>
          <Link to="/movies?category=new">See all</Link>
        </div>
        <Carousel className={styles.movie_carousel} movies={movies.upcomingMovies} />
      </section>
      <section aria-label="Top Rated">
        <div className={styles.section_title}>
          <h2>Top Rated</h2>
          <Link to="/movies?category=top_rated">See all</Link>
        </div>
        <Carousel className={styles.movie_carousel} movies={movies.topRatedMovies} />
      </section>
    </>
  );
}
