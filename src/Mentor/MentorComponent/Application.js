import mentorList from '../mentorList.json' ;
import Card from '../Card/Card' ;

const ApplicationDevop = () => {
 
  return (
    <div className="mentorList app">
      <h1>APP DEVELOPMENT</h1>
      <div className="row justify-content-center
">
        {mentorList.map(
          (mentor) =>
            mentor.Interest.App && (
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
export default ApplicationDevop;
