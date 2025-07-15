import { useEffect, useState } from "react";
import Carousel from "@/components/Carousel/Carousel";

const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export default function ProductsList() {
  const [, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/mock/products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      });
  }, []);

  if (loading) return <div>로딩 중...</div>;

  return (
    <>
      <Carousel slides={SLIDES} />
    </>
  );
}
