import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./cartIcon.css";

export default function CartIcon() {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([]);
  const [showModal, setShowModal] = useState(false);

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

  const totalItems = cartItems.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <div className="cart-icon-container">
      <div className="cart-icon" onClick={() => navigate("/cart")}>
        🛒
        {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
      </div>
      {showModal}
    </div>
  );
}
