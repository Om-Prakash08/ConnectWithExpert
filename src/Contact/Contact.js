import "./Contact.css" ;

const Contact = () => {
  return (
    <div className="contact">
      <div class="container">
        <div class="brand-logo"></div>
        <div class="brand-title">Contact Me</div>
        <div class="inputs">
          <form
            action="mailto:omprakash.eee18@itbhu.ac.in"
            method="POST"
            enctype="text/plain"
          >
            <label>EMAIL</label>
            <input type="email" placeholder="example@gmail.com" />
            <label>NAME</label>
            <input type="Name" placeholder="name" />
            <label>YOUR MESSAGE</label>
            <textarea
              name=""
              type="text"
              id=""
              cols="30"
              rows="10"
              placeholder="message"
            ></textarea>
            <button type="submit" style={{fontSize:"large"}}>
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
