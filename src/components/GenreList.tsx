import { useRef } from "react";
import GenreButton from "@/components/GenreButton";
import { useDraggable } from "@/hooks/useDraggable";
import type { MovieGenre } from "@/types/movies";
import styles from "./Genre.module.scss";

type Props = {
  genres: MovieGenre[];
  activeGenreId: number | null;
  onGenreClick: (id: number) => void;
};

export default function GenreList({ genres, activeGenreId, onGenreClick }: Props) {
  const containerRef = useRef<HTMLUListElement>(null);
  const { isDragging, onMouseDown, onMouseMove, onMouseUp, onMouseLeave } =
    useDraggable(containerRef);

  const handleClick = (id: number) => {
    if (isDragging) {
      return;
    }

    onGenreClick(id);
  };

  return (
    <ul
      className={styles.genre_list}
      ref={containerRef}
      onMouseDown={onMouseDown}
      onMouseMove={onMouseMove}
      onMouseUp={onMouseUp}
      onMouseLeave={onMouseLeave}
    >
      {genres.map((genre) => (
        <GenreButton
          key={genre.id}
          id={genre.id}
          name={genre.name}
          active={genre.id === activeGenreId}
          onClick={handleClick}
        />
      ))}
    </ul>
  );
}
