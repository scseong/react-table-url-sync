import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";

export default function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
