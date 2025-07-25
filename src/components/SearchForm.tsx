import { IoSearchOutline, IoOptions } from "react-icons/io5";
import styles from "./SearchForm.module.scss";

export default function SearchForm() {
  return (
    <form role="search" className={styles.form}>
      <div className={styles.input_container}>
        <div className={styles.icon_wrap}>
          <IoSearchOutline size="1.8rem" />
        </div>
        <input type="search" placeholder="Movies..." />
        <div className={styles.divide} />
        <div className={styles.icon_wrap}>
          <button type="button">
            <IoOptions size="1.8rem" />
          </button>
        </div>
      </div>
    </form>
  );
}
