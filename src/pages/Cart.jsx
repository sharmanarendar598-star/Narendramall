import { useContext } from "react";
import { StoreContext } from "../context/StoreContext";

function Cart() {
  const {
    cart,
    removeFromCart,
  } = useContext(StoreContext);

  const total =
    cart.reduce(
      (sum, item) =>
        sum + item.price,
      0
    );

  return (
    <div className="container">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <h2>
          Cart is Empty
        </h2>
      ) : (
        <>
          {cart.map((item) => (
            <div
              className="cart-item"
              key={item.id}
            >
              <h3>
                {item.name}
              </h3>

              <p>
                ₹{item.price}
              </p>

              <button
                onClick={() =>
                  removeFromCart(
                    item.id
                  )
                }
              >
                Remove
              </button>
            </div>
          ))}

          <h2>
            Total: ₹{total}
          </h2>
        </>
      )}
    </div>
  );
}

export default Cart;