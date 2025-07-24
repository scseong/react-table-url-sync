import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section aria-label="">
        <div>Carousel</div>
      </section>
      <section aria-label="">
        <div>
          <h2>New Movies LIst</h2>
          <Link to="/">See all</Link>
        </div>
        <div>Carousel</div>
      </section>
      <section aria-label="">
        <div>
          <h2>Movies List</h2>
          <Link to="/">See all</Link>
          <div>Carousel</div>
        </div>
      </section>
    </>
  );
}
