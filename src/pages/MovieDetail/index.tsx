import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ExpandableText from "@/components/Common/ExpandableText";
import getMovieDetail from "@/apis/getMovieDetail";
import { BASE_IMAGE_URL } from "@/constants/url";
import { runtimeToHourMinute } from "@/utils/time";
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
          {/* <h2>Movie Meta</h2> */}
          <dl className={styles.movie_meta}>
            <dt>장르</dt>
            <dd>{movieDetail.genres[0].name}</dd>
            <dt>개봉일</dt>
            <dd>{movieDetail.release_date}</dd>
            <dt>상태</dt>
            <dd>{movieDetail.status}</dd>
            <dt>러닝타임</dt>
            <dd>{runtimeToHourMinute(movieDetail.runtime)}</dd>
          </dl>
        </section>
        <section>
          {/* <h2>Movie Info</h2> */}
          <ExpandableText text={movieDetail.overview} maxLength={140} />
        </section>
      </article>
    </>
  );
}
