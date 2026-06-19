import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function ProtectedRoute({ children }) {
  const { user } = useContext(StoreContext);

  return user ? children : <Navigate to="/login" />;
}

export default ProtectedRoute;