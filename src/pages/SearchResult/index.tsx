import { useSearchParams } from "react-router-dom";

export default function SearchResult() {
  const [params] = useSearchParams();
  const query = params.get("query");

  return (
    <div>
      <h2>Results: {query}</h2>
    </div>
  );
}
