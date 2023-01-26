import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="px-4 lg:px-6 py-3">
      <h1 className="text-center font-medium text-2xl my-4 text">
        Welcome to our Store
      </h1>

      <Link to={"/react-shopping-cart/store"}>Browse our products</Link>
    </div>
  );
}
