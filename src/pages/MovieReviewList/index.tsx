import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import PageHeader from "@/components/Common/PageHeader";
import ReviewItem from "@/components/Review/ReviewItem";
import getMovieReviews from "@/apis/getMovieReviews";
import type { MovieReview } from "@/types/movies";
import styles from "./index.module.scss";

export default function MovieReviewList() {
  const [reviews, setReviews] = useState<MovieReview[]>();
  const { id: movieId } = useParams();

  useEffect(() => {
    const fetchMovieReviews = async (movieId?: string) => {
      if (!movieId) {
        setReviews([]);
        return;
      }

      const res = await getMovieReviews(movieId);
      setReviews(res);
    };

    fetchMovieReviews(movieId);
  }, [movieId]);

  // TODO: movieId null exception
  if (!movieId) return null;

  return (
    <main>
      <PageHeader title="reviews" prevPath={`/movies/${movieId}`} />
      <section className={styles.reviews}>
        {reviews?.map((review) => <ReviewItem review={review} />)}
      </section>
    </main>
  );
}
