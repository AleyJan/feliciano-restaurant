import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./services.css";

const Services = () => {
  return (
    <>
      <Header />
      <div className="container3">
        <h1>Services</h1>
        <h2>Catering Services</h2>
        <section className="services-section">
          <div className="card">
            <img src="/birthday.png" alt="123" />
            <h3>Birthday Party</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="card">
            <img src="/business.png" alt="123" />
            <h3>Business Meetings</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
          <div className="card">
            <img src="/wedding.png" alt="123" />
            <h3>Wedding Party</h3>
            <p>
              Even the all-powerful Pointing has no control about the blind
              texts it is an almost unorthographic.
            </p>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Services;
