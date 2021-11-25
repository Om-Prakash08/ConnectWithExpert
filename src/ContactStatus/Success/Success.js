import "./Success.css";


const Success = () => {
  return (
    <div className="success">
     <div id="container">
      <div id="success-box">
        <div class="face">
          <div class="eye"></div>
          <div class="eye right"></div>
          <div class="mouth happy"></div>
        </div>
        <div class="shadow scale"></div>
        <div class="message">
          <h1 class="alert">Success!</h1>
          <p>Yay, Your message has been successfully received.</p>
        </div>
        <a class="button-box green" href="/">Continue</a>
      </div>
    </div>

    {/* <footer>
      <p>
        made by
        <a href="https://my-portfolio-om.herokuapp.com/"> Om Prakash</a> ♡
      </p>
    </footer> */}
    </div>
  );
};

export default Success;
