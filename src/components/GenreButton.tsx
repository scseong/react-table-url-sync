import styles from "./Genre.module.scss";

type Props = {
  id: number;
  name: string;
  active: boolean;
  buttonStyles?: React.CSSProperties;
  onClick: (id: number) => void;
};

export default function GenreButton({ id, name, active, buttonStyles, onClick }: Props) {
  return (
    <li key={id} className={styles.genre_item}>
      <button
        type="button"
        onClick={() => onClick && onClick(id)}
        className={active ? styles.active : ""}
        style={buttonStyles}
      >
        {name}
      </button>
    </li>
  );
}
