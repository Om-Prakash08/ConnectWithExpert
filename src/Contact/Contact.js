import "./Contact.css";
import { useHistory } from "react-router-dom";

const Contact = (props) => {
  const { imgSrc, name, phone } = props;
  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(history) ;
    history.push("/contact/success");
  };
  return (
    <div className="contact">
      <div class="container">
        <div class="brand-logo"></div>
        <div class="brand-title">Contact Me</div>
        <div class="inputs">
          <form
            // action="mailto:omprakash.eee18@itbhu.ac.in"
            // method="POST"
            // enctype="text/plain"
            onSubmit={handleSubmit}
          >
            <label>EMAIL</label>
            <input type="email" placeholder="example@gmail.com" required />
            <label>NAME</label>
            <input type="Name" placeholder="name" required/>
            <label>YOUR MESSAGE</label>
            <textarea
              name=""
              type="text"
              id=""
              cols="30"
              rows="10"
              placeholder="message"
              required
            ></textarea>
            <button type="submit" style={{ fontSize: "large" }}>
              SUBMIT
            </button>
          </form>
        </div>
      </div>
      <a
        href="https://wa.me/+918127392352"
        class="whatsapp_float"
        target="_blank"
      >
        {" "}
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default Contact;
