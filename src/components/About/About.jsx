import "./about.css";

const About = () => {
  return (
    <div className="container2">
      <section className="img-section">
        <div className="img-wrapper">
          <img src="/bg1.jpg" alt="bg" className="offset-img1" />
          <img src="/bg2.jpg" alt="bg" className="offset-img2" />
        </div>
      </section>
      <section className="text-section">
        <h1>About</h1>
        <h2>Feliciano Restaurant</h2>
        <p>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia. It is a paradisematic country, in which
          roasted parts of sentences fly into your mouth.
        </p>
        <p>
          Mon - Fri <strong>8 AM - 11 PM</strong>
        </p>
        <p id="num">+ 1-978-123-4567</p>
      </section>
    </div>
  );
};

export default About;
