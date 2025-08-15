import { useState, useEffect } from "react";
import "../css/home.css";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen((prev) => !prev);

  useEffect(() => {
    const slides = document.querySelectorAll(".slide");
    let index = 0;

    const interval = setInterval(() => {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? "block" : "none";
      });
      index = (index + 1) % slides.length;
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="container">
      {/* Top bar */}
      <div className="top-line">
        <ul>
          <li>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 90 90"
              fill="rgba(255, 255, 255, 0.5)"
            >
              <path d="M38.789 51.211l10.876 10.876c0.974 0.974 2.471 1.194 3.684 0.543l13.034-6.997c0.964-0.518 2.129-0.493 3.07 0.066l19.017 11.285c1.357 0.805 1.903 2.489 1.268 3.933-1.625 3.698-4.583 10.476-5.758 13.473-0.247 0.631-0.615 1.209-1.127 1.652-12.674 10.986-37.89-2.4-57.191-21.701C6.358 45.039-7.028 19.823 3.958 7.149c0.444-0.512 1.022-0.88 1.652-1.127 2.996-1.175 9.775-4.133 13.473-5.758 1.444-0.635 3.128-0.089 3.933 1.268l11.285 19.017c0.558 0.941 0.583 2.106 0.066 3.07L27.37 36.651c-0.651 1.213-0.431 2.71 0.543 3.684 0 0 10.876 10.876 10.876 10.876z" />
            </svg>
            +12345678
          </li>
          <li>
            <a href="mailto:alijan.dev507@gmail.com">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 122.88 103.44"
                width={24}
                height={14}
                fill="rgba(255, 255, 255, 0.5)"
              >
                <path d="M69.49 102.77 49.8 84.04 29.57 102.31a2.44 2.44 0 0 1-4.24-1.65V60.77L0.76 37.41a2.44 2.44 0 0 1 1.02-4.12l118-33.2a2.44 2.44 0 0 1 3.01 3.58l-49.2 98.42a2.44 2.44 0 0 1-4.1.68ZM46.26 80.68 30.21 65.42v29.76l16.05-14.5Zm-18.11-23.95 76.32-47.26L7.22 36.83l20.93 19.9Zm86.28-47.7L31.79 60.19l38.67 36.78 44.97-87.94Z" />
              </svg>
              alijan.dev507@gmail.com
            </a>
          </li>
          <li>Open hours: Monday - Sunday 8:00AM - 9:00PM</li>
        </ul>
      </div>

      {/* Navbar */}
      <header className="header">
        <div className="logo">Feliciano</div>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <nav className={`nav ${menuOpen ? "open" : ""}`}>
          <button className="close-btn" onClick={toggleMenu}>
            ✖
          </button>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
            <li>
              <button>Book a table</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="main">
        <div id="falicion-text">Feliciano</div>
        <div className="slider">
          <div className="slide">Best Cuisine</div>
          <div className="slide">Nutritious & Tasty</div>
          <div className="slide">Delicious Specialities</div>
        </div>
      </section>

      {/* Menu Items Section */}
      <section className="main2">
        <div className="img">
          <img src="/steak.png" alt="steak" width={120} />
          <h4>Beef Steak</h4>
          <p>Juicy tender steak</p>
        </div>
        <div className="img">
          <img src="/egg.png" alt="egg" width={120} />
          <h4>Fried Egg</h4>
          <p>Perfect for Breakfast</p>
        </div>
        <div className="img">
          <img src="/hummus.png" alt="hummus" width={120} />
          <h4>Hummus with Salad</h4>
          <p>Appetizer</p>
        </div>
        <div className="img">
          <img src="/pizza.png" alt="pizza" width={120} />
          <h4>Pizza</h4>
          <p>Italian Pizza</p>
        </div>
      </section>
    </div>
  );
};

export default Home;
