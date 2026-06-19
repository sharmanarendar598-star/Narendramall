import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="hero">
      <h1>Welcome To Narendra Mall</h1>

      <p>
        Shop Electronics, Fashion,
        Furniture, Gaming and More
      </p>

      <Link to="/products">
        <button>
          Shop Now
        </button>
      </Link>
    </div>
  );
}

export default Home;