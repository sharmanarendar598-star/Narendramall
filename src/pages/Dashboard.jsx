import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Dashboard() {
  const { user, cart } =
    useContext(StoreContext);

  return (
    <div className="container">
      <h1>
        Welcome{" "}
        {user?.name}
      </h1>

      <h2>
        Cart Items:
        {cart.length}
      </h2>

      <p>
        This is a protected
        dashboard page.
      </p>
    </div>
  );
}

export default Dashboard;