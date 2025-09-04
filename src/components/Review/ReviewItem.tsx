import { FaStar } from "react-icons/fa";
import IconWrapper from "@/components/Common/IconWrapper";
import { formatDate } from "@/utils/date";
import { BASE_IMAGE_URL } from "@/constants/url";
import type { MovieReview } from "@/types/movies";
import styles from "./ReviewItem.module.scss";

type Props = {
  review: MovieReview;
};

export default function ReviewItem({ review }: Props) {
  const { author, author_details, content, created_at } = review || {};
  const { avatar_path, rating } = author_details || {};

  const avatarUrl = avatar_path
    ? `${BASE_IMAGE_URL}${avatar_path}`
    : "https://www.gravatar.com/avatar/?d=mp";
  const altText = author ? `${author}'s avatar` : "user avatar";

  return (
    <div className={styles.review}>
      <div className={styles.header}>
        <div className={styles.info}>
          <div>
            <img className={styles.avatar} src={avatarUrl} alt={altText} />
          </div>
          <div className={styles.author_wrap}>
            <p className={styles.author}>{author}</p>
            <p className={styles.date}>{formatDate(created_at, "dayMonthYear")}</p>
          </div>
        </div>
        <div className={styles.rating}>
          <IconWrapper icon={FaStar} />
          <p>{rating}</p>
        </div>
      </div>
      <div className={styles.content}>
        <p>{content}</p>
      </div>
    </div>
  );
}
