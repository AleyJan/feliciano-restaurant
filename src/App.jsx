import About from "./components/About/About";
import Home from "./components/Home/Home";
import Services from "./components/Services/Services";
import Blog from "./components/Blog/Blog";
import "./App.css";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

import { useState } from "react";
import Header from "./components/Header/Header";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <div>
        {currentPage == "home" && <Home />}
        {currentPage == "about" && <About />}
        {currentPage == "contact" && <Contact />}
        {currentPage == "services" && <Services />}
        {currentPage == "blog" && <Blog />}
      </div>
      <Footer setCurrentPage={setCurrentPage} />
    </>
  );
};

export default App;
