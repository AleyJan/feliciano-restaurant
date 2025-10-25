import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./menu.css";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

export default function Menu() {
  const navigate = useNavigate();
  const [cart, setCart] = useState([]);
  const [items] = useState([
    { id: 1, name: "Grilled Chicken", price: 850, image: "/grilled-chick.png" },
    { id: 2, name: "Beef Burger", price: 650, image: "/beef-burger.png" },
    { id: 3, name: "Pasta Alfredo", price: 700, image: "/pasta.png" },
  ]);

  // ✅ Load cart for logged-in user
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("authUser"));
    if (!user) return;
    const savedCart =
      JSON.parse(localStorage.getItem(`cartItems_${user.email}`)) || [];
    setCart(savedCart);

    const updateCart = () => {
      const updated =
        JSON.parse(localStorage.getItem(`cartItems_${user.email}`)) || [];
      setCart(updated);
    };
    window.addEventListener("cartUpdated", updateCart);
    return () => window.removeEventListener("cartUpdated", updateCart);
  }, []);

  const handleAddToCart = (item) => {
    const user = JSON.parse(localStorage.getItem("authUser"));
    if (!user) {
      alert("You are not logged in! Please login first.");
      navigate("/login");
      return;
    }

    const key = `cartItems_${user.email}`;
    const existingCart = JSON.parse(localStorage.getItem(key)) || [];
    const isAlreadyInCart = existingCart.some((i) => i.id === item.id);

    if (isAlreadyInCart) {
      alert("Item already in cart!");
      return;
    }

    const updatedCart = [...existingCart, { ...item, quantity: 1 }];
    localStorage.setItem(key, JSON.stringify(updatedCart));
    setCart(updatedCart);
    window.dispatchEvent(new Event("cartUpdated"));

    alert(`${item.name} added to cart!`);
  };

  const isItemInCart = (id) => cart.some((item) => item.id === id);

  return (
    <>
      <Header />
      <div className="menu-container">
        <h1 className="menu-header">Feliciano Menu</h1>
        <div className="menu-grid">
          {items.map((item) => (
            <div key={item.id} className="menu-card">
              <img src={item.image} alt={item.name} className="menu-image" />
              <h3 className="menu-name">{item.name}</h3>
              <p className="menu-price">Rs. {item.price}</p>

              <button
                className={`menu-btn ${isItemInCart(item.id) ? "added" : ""}`}
                onClick={() => handleAddToCart(item)}
                disabled={isItemInCart(item.id)}
              >
                {isItemInCart(item.id) ? "Added to Cart" : "Add to Cart"}
              </button>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
