import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import ReviewItem from "@/components/Review/ReviewItem";
import CommonCarousel from "@/components/Carousel/CommonCarousel";
import ExpandableText from "@/components/Common/ExpandableText";
import IconWrapper from "@/components/Common/IconWrapper";
import getMovieDetail from "@/apis/getMovieDetail";
import getMovieReviews from "@/apis/getMovieReviews";
import { BASE_IMAGE_URL } from "@/constants/url";
import { runtimeToHourMinute } from "@/utils/time";
import type { MovieDetail, MovieReview } from "@/types/movies";
import styles from "./index.module.scss";

export default function MovieDetail() {
  const [movieDetail, setMovieDetail] = useState<MovieDetail>();
  const [movieReviews, setMovieReviews] = useState<MovieReview[]>();
  const { id } = useParams();

  useEffect(() => {
    const fetchMovieDetail = async () => {
      try {
        const movieDetailRes = await getMovieDetail(id || "");
        const reviewsRes = await getMovieReviews(id);
        setMovieDetail(movieDetailRes);
        setMovieReviews(reviewsRes || []);
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovieDetail();
  }, [id]);

  // TODO: null
  if (!movieDetail) return null;

  return (
    <>
      <article>
        <section className={styles.figure_wrap}>
          <figure className={styles.poster_wrap}>
            <img src={BASE_IMAGE_URL + movieDetail.poster_path} alt={movieDetail.title} />
            <figcaption>
              <h1>{movieDetail.title}</h1>
            </figcaption>
          </figure>
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
        <section className={styles.row}>
          {/* <h2>Movie Info</h2> */}
          <ExpandableText text={movieDetail.overview} maxLength={140} />
        </section>
        <section className={styles.row}>
          {/* TODO: More See Link */}
          <h2>Rating & Reviews</h2>
          <div className={styles.ratings}>
            <div className={styles.ratings_vote}>
              <p>
                <IconWrapper icon={FaStar} />
                {movieDetail.vote_average}
              </p>
              <p>{movieDetail.vote_count} ratings</p>
            </div>
            <div className={styles.ratings_btn_wrap}>
              <button type="button">Rate</button>
            </div>
          </div>
          <div className={styles.reviews}>
            <CommonCarousel
              items={movieReviews!}
              renderItem={(review) => <ReviewItem review={review} />}
            />
          </div>
        </section>
      </article>
    </>
  );
}
