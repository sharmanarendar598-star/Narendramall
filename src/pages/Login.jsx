import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Login() {
  const [name, setName] =
    useState("");

  const { setUser } =
    useContext(StoreContext);

  const navigate =
    useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    setUser({
      name,
    });

    navigate("/dashboard");
  };

  return (
    <div className="login">
      <h1>Login</h1>

      <form
        onSubmit={
          handleSubmit
        }
      >
        <input
          type="text"
          placeholder="Enter Name"
          value={name}
          onChange={(e) =>
            setName(
              e.target.value
            )
          }
        />

        <button>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;