import { useEffect, useState } from "react";

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

  return <div>App</div>;
}
