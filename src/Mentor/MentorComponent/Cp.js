// import boy from "../Card/card_img2.jpeg";
import girl from "../Card/card_img1.jpeg";
import mentorList from '../mentorList.json' ;
import Card from '../Card/Card' ;

const CompetitiveProgramming = () => {
  return (
    <div className="mentorList">
    <h1>COMPETITIVE PROGRAMMING</h1>
    <div className="row justify-content-center
">
      {mentorList.map(
        (mentor) =>
          mentor.Interest.Cp && (
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
export default CompetitiveProgramming;
