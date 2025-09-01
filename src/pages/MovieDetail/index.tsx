import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovieDetail from "@/apis/getMovieDetail";
import { BASE_IMAGE_URL } from "@/constants/url";
import type { MovieDetail } from "@/types/movies";
import styles from "./index.module.scss";

export default function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const res = await getMovieDetail(id || "");
        setMovieDetail(res);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  console.log(movieDetail);

  // TODO: null
  if (!movieDetail) return null;

  return (
    <>
      <article>
        <figure className={styles.poster_wrap}>
          <img src={BASE_IMAGE_URL + movieDetail.poster_path} alt={movieDetail.title} />
          <figcaption>
            <h1>{movieDetail.title}</h1>
          </figcaption>
        </figure>
        <section>
          <ul className={styles.movie_meta}>
            <li>{movieDetail.genres[0].name}</li>
            <li>{movieDetail.release_date}</li>
            <li>{movieDetail.status}</li>
            <li>{movieDetail.runtime}</li>
          </ul>
        </section>
      </article>
    </>
  );
}
