import type { PropsWithChildren } from "react";
import styles from "./layout.module.scss";

export default function MainContainer({ children }: PropsWithChildren) {
  return (
    <main className={styles.main}>
      <section className={styles.main_wrap}>{children}</section>
    </main>
  );
}
