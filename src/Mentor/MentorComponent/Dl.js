import mentorList from '../mentorList.json' ;
import Card from '../Card/Card' ;

const DeepLearning = () => {

  return (
    <div className="mentorList">
      <h1>DEEP LEARNING</h1>
      <div className="row justify-content-center
">
        {mentorList.map(
          (mentor) =>
            mentor.Interest.Dl && (
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
export default DeepLearning;
