import Card from "../utilities/Card";
import "./Cards-Container.css";

const CardContainer = () => {
  return (
    <div className="card-container">
      <h2 className="card-container__heading">
        Check out these Epic Destinations!
      </h2>
      <div className="card-grid">
        <div className="big-cards">
          <Card
            image={"https://media.timeout.com/images/105490133/image.jpg"}
            sutitle={"Adventure"}
            text={"Explorer the hidden gems of Sicilly coast"}
            path={"/offer"}
          />
          <Card
            image={"/source-folder/images/img-4.jpg"}
            sutitle={"Luxury"}
            text={"Travel through the island of Bali in a Private Cruise"}
            path={"/services"}
          />
        </div>
        <div className="small-cards">
          <Card
            image={"/source-folder/images/img-9.jpg"}
            sutitle={"Mystery"}
            text={"Set Sail in the Atlantic Ocean visiting Uncharted Waters"}
            path={"/services"}
          />
          <Card
            image={"/source-folder/images/img-2.jpg"}
            sutitle={"Adventure"}
            text={"Experiance Football on Top of the Himalayan Mountains"}
            path={"/services"}
          />
          <Card
            image={"/source-folder/images/img-3.jpg"}
            sutitle={"Adrenalin"}
            text={"Ride Through Sahara Desesert ot camel`s back"}
            path={"/services"}
          />
          <Card
            image={"/source-folder/images/img-5.jpg"}
            sutitle={"Travel"}
            text={
              "Go kill yourself jumping from the edge of Cliff and win Darwin Award"
            }
            path={"/services"}
          />
          <Card
            image={"/source-folder/images/img-7.jpg"}
            sutitle={"Travel"}
            text={"Cannioynig in Singapore"}
            path={"/services"}
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
