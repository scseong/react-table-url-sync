import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import getMovieDetail from "@/apis/getMovieDetail";
import type { MovieDetail } from "@/types/movies";

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

  return <div>MovieDetail</div>;
}
