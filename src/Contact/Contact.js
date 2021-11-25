import "./Contact.css";
import mentorList from "../Mentor/mentorList.json";
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

const Contact = (props) => {
  const { loginData } = props;
  const [email, setEmail] = useState();
  const [name, setName] = useState();
  const [mentorId,setMentorId] =useState(1) ;
  useEffect(() => {
    setEmail(loginData.Email);
    setName(loginData.Name);
  }, [loginData]);

  let data = JSON.parse(localStorage.getItem("mentorId"));
  useEffect(() => {
    if (data) {
      setMentorId(data);
    } else if(!mentorId){
        setMentorId(1) ;
       }   // eslint-disable-next-line
  }, [data]);

  function filterById(jsonObject, id) {
    return jsonObject.filter(function (jsonObject) {
      return jsonObject["id"] === id;
    })[0];
  }

  const [selectedMentor, setSelectedMentor] = useState([]);
  useEffect(() => {
    setSelectedMentor(filterById(mentorList, mentorId));
  }, [mentorId, filterById]);

  let history = useHistory();
  const handleSubmit = (event) => {
    event.preventDefault();
    history.push("/contact/success");
  };
  const handelChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handelChangeName = (e) => {
    console.log(e);
    setName(e.target.value);
  };
  return (
    <div className="contact">
      <div class="container">
        <div class="brand-logo">
          <img src={"MentorImage/" + selectedMentor.imgSrc}  alt="MentorImage"/>
        </div>
        <div class="brand-title">{selectedMentor.name}</div>
        <div class="inputs">
          <form onSubmit={handleSubmit}>
            <label>EMAIL</label>
            <input
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={handelChangeEmail}
              required
            />
            <label>NAME</label>
            <input
              type="Name"
              placeholder="name"
              value={name}
              onChange={handelChangeName}
              required
            />
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
              SEND
            </button>
          </form>
        </div>
      </div>
      <a
        href={"https://wa.me/+91" + selectedMentor.phone}
        class="whatsapp_float"
        target="_blank"
        rel="noreferrer"
      >
        {" "}
        <i class="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </div>
  );
};

export default Contact;
