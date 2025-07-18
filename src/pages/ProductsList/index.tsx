import { useEffect, useState } from "react";
import Carousel from "@/components/Carousel/Carousel";

const SLIDES = [
  { id: 1, imageUrl: "/images/banner_1.jpg" },
  { id: 2, imageUrl: "/images/banner_2.jpg" }
];

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
      <Carousel slides={SLIDES} options={{ loop: true }} />
    </>
  );
}
