import About from "./components/About";
import Home from "./components/Home";
import Services from "./components/Services";
import Blog from "./components/Blog";
import "./App.css";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Home />
      <About />
      <hr className="section-divider" />
      <Services />
      <hr className="section-divider" />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
