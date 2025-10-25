import About from "./pages/About/About";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Blog from "./pages/Blog/Blog";
import Contact from "./pages/Contact/Contact";
import PrivateRoutes from "./routes/PrivateRoutes";
import RedirectIfAuthenticated from "./routes/RedirectIfAuthenticated";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Menu from "./pages/Menu/Menu";
import CartPage from "./pages/Cart/Cart";

// import { useState } from "react";

import { Routes, Route } from "react-router-dom";

import "./App.css";

const App = () => {
  // const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      {/* <Header setCurrentPage={setCurrentPage} />
      <div>
        {currentPage == "home" && <Home />}
        {currentPage == "about" && <About />}
        {currentPage == "contact" && <Contact />}
        {currentPage == "services" && <Services />}
        {currentPage == "blog" && <Blog />}
      </div>
      <Footer setCurrentPage={setCurrentPage} /> */}

      <Routes>
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route element={<RedirectIfAuthenticated />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
};

export default App;
