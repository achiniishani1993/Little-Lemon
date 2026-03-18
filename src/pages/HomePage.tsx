
import Header from "../components/Header";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <Header />

      <div className="container text-center mt-5">
        <h2>Experience the Best Dining</h2>
        <p className="mt-3">
          Enjoy delicious meals made with fresh ingredients in a cozy
          atmosphere.
        </p>

        <Link to="/booking" className="btn btn-success mt-4">
          Reserve a Table
        </Link>
      </div>
    </>
  );
}