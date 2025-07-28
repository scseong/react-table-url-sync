import { IoSearchOutline, IoOptions } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import useInput from "@/hooks/useInput";
import styles from "./SearchForm.module.scss";

export default function SearchForm() {
  const navigate = useNavigate();
  const [searchValue, onSearchChange] = useInput("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search?query=${searchValue}`);
  };

  return (
    <form role="search" className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.input_container}>
        <div className={styles.icon_wrap}>
          <IoSearchOutline size="1.8rem" />
        </div>
        <input
          type="search"
          placeholder="Movies..."
          value={searchValue}
          onChange={onSearchChange}
        />
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
