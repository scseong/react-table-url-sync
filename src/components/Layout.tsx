import Header from "./Header";
import Footer from "./Footer";
import CategoriesMenu from "./CategoriesMenu";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <CategoriesMenu />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
