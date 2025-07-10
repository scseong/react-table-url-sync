import Header from "./Header";
import Footer from "./Footer";
import MainContainer from "./MainContainer";
import CategoriesMenu from "./CategoriesMenu";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <Header />
      <CategoriesMenu />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
}
