import styles from "./layout.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.header_title}>Movie Finder</h1>
      <form role="search">
        <input type="search" placeholder="Movies..." />
      </form>
      <nav>
        <ul>
          <li>
            <button>All</button>
          </li>
          <li>
            <button>Adventure</button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
