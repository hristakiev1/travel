import Card from "../utilities/Card";
import "./Cards-Container.css";

const CardContainer = () => {
  return (
    <div className="card-container">
      <h2>Check out these Epic Destinations!</h2>
      <div className="card-grid">
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default CardContainer;
