import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "./contact.css";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const name = e.target.name.value;

    if (!email || !name || !textarea) {
      alert("please fill all details");
    }

    console.log(email);
    console.log(name);
  };
  return (
    <>
      <Header />
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form onSubmit={handleSubmit} className="contact-form">
          <input type="text" name="name" placeholder="Your Name" />
          <input type="email" name="email" placeholder="Your Email" />
          <textarea
            name="textarea"
            placeholder="Your Message"
            rows="5"
          ></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
