// import boy from "../Card/card_img2.jpeg";
import mentorList from '../mentorList.json' ;
import Card from '../Card/Card' ;

const MachineLearning = () => {
 
  return (
    <div className="mentorList">
      <h1>MACHINE LEARNING</h1>
      <div className="row justify-content-center
">
        {mentorList.map(
          (mentor) =>
            mentor.Interest.Ml && (
              <Card
                key={mentor.id}
                id={mentor.id}
                imgSrc={mentor.imgSrc}
                name={mentor.name}
                description={mentor.description}
                
              />
            )
        )}
      </div>
    </div>
  );
};
export default MachineLearning;
