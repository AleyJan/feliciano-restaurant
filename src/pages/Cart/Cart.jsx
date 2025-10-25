import { useState, useEffect } from "react";
import "./cart.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function CartPage() {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const loadCart = () => {
      const user = JSON.parse(localStorage.getItem("authUser"));
      if (!user) {
        setCartItems([]);
        return;
      }
      const savedCart =
        JSON.parse(localStorage.getItem(`cartItems_${user.email}`)) || [];
      setCartItems(savedCart);
    };

    loadCart();
    window.addEventListener("cartUpdated", loadCart);
    return () => window.removeEventListener("cartUpdated", loadCart);
  }, []);

  const handleRemove = (id) => {
    const user = JSON.parse(localStorage.getItem("authUser"));
    if (!user) return;
    const key = `cartItems_${user.email}`;

    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem(key, JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleQuantityChange = (id, delta) => {
    const user = JSON.parse(localStorage.getItem("authUser"));
    if (!user) return;
    const key = `cartItems_${user.email}`;

    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
        : item
    );
    setCartItems(updatedCart);
    localStorage.setItem(key, JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );

  return (
    <>
      <Header />
      <div className="cart-page-container">
        <h1 className="cart-header">Your Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart-text">Your cart is empty.</p>
        ) : (
          <div className="cart-content">
            <div className="cart-items">
              {cartItems.map((item) => (
                <div key={item.id} className="cart-item">
                  <img src={item.image} alt={item.name} className="cart-img" />

                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <p>Rs. {item.price}</p>

                    <div className="quantity-box">
                      <button onClick={() => handleQuantityChange(item.id, -1)}>
                        −
                      </button>
                      <span>{item.quantity || 1}</span>
                      <button onClick={() => handleQuantityChange(item.id, 1)}>
                        +
                      </button>
                    </div>

                    <button
                      className="remove-btn"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="cart-summary">
              <h2>Total: Rs. {totalPrice}</h2>
              <button className="checkout-btn">Proceed to Checkout</button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
