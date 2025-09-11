import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa";
import IconWrapper from "./IconWrapper";
import styles from "./PageHeader.module.scss";

type Props = {
  title?: string;
  prevPath: string;
};

export default function PageHeader({ title, prevPath }: Props) {
  return (
    <header className={styles.header}>
      <Link to={prevPath}>
        <IconWrapper icon={FaChevronLeft} />
      </Link>
      {title && <h1>{title}</h1>}
    </header>
  );
}
