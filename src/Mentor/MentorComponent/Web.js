// import boy from "../Card/card_img2.jpeg";
import girl from "../Card/card_img1.jpeg";
import mentorList from "../mentorList.json";
import Card from "../Card/Card";


const WebDev = () => {
  return (
    <div className="mentorList">
      <h1>WEB DEVELOPMENT</h1>
      <div className="row justify-content-center">
        {mentorList.map(
          (mentor) =>
            mentor.Interest.Web && (
              <Card
                key={mentor.id}
                imgSrc={girl}
                name={mentor.name}
                description={mentor.description}
              />
            )
        )}
      </div>
    </div>
  );
};
export default WebDev;
