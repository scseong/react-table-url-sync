import type { PropsWithChildren } from "react";
import Header from "./Header";
import Footer from "./Footer";

export default function HomeLayout({ children }: PropsWithChildren) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}
