import { useState, useEffect } from "react";
import { IoSearchOutline, IoOptions } from "react-icons/io5";
import GenreList from "@/components/GenreList";
import getMovieGenres from "@/apis/getMovieGenres";
import type { MovieGenre } from "@/types/movies";
import styles from "./layout.module.scss";

export default function Header() {
  const [activeGenreId, setActiveGenreId] = useState<number | null>(null);
  const [genres, setGenres] = useState<MovieGenre[]>([]);
  const [error, setError] = useState<string | null>(null);

  const handleGenreButtonClick = (id: number) => {
    setActiveGenreId(id);
  };

  useEffect(() => {
    const fetchMovieGenres = async () => {
      try {
        const genres = await getMovieGenres();
        setGenres(genres);
      } catch (error) {
        setError("");
      }
    };

    fetchMovieGenres();
  }, []);

  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Movie Finder</h1>
      <form role="search" className={styles.form}>
        <div className={styles.input_container}>
          <IoSearchOutline size="2rem" />
          <input type="search" placeholder="Movies..." />
          <button type="button">
            <IoOptions size="2rem" />
          </button>
        </div>
      </form>
      <nav>
        <GenreList genres={genres} activeGenreId={activeGenreId} onGenreClick={handleGenreButtonClick} />
      </nav>
    </header>
  );
}
