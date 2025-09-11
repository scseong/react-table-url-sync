import { Link } from "react-router-dom";
import IconWrapper from "./IconWrapper";
import { FaChevronRight } from "react-icons/fa6";
import styles from "./SectionHeader.module.scss";

type Props = {
  title: string;
  moreLink?: string;
};

export default function SectionHeader({ title, moreLink }: Props) {
  return (
    <div className={styles.header}>
      <h2>{title}</h2>
      {moreLink && (
        <Link to={moreLink}>
          <IconWrapper icon={FaChevronRight} />
        </Link>
      )}
    </div>
  );
}
