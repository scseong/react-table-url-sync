import { Link } from "react-router-dom";
import { IoCartOutline, IoPersonAddOutline } from "react-icons/io5";
import styles from "./layout.module.scss";

export default function Header() {
  return (
    <header>
      <div className={styles.header_wrap}>
        <div className={styles.title}>
          <h1>
            <Link to="/">Shop</Link>
          </h1>
        </div>
        <div className={styles.icons}>
          <ul>
            <li>
              <IoCartOutline size="1.4rem" title="장바구니" />
            </li>
            <li>
              <IoPersonAddOutline size="1.4rem" title="회원가입" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
