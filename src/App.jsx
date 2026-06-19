import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./routes/ProtectedRoute";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/products"
          element={<Products />}
        />

        <Route
          path="/product/:id"
          element={<ProductDetails />}
        />

        <Route
          path="/cart"
          element={<Cart />}
        />

        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>

      <Footer />
    </>
  );
}

export default App;