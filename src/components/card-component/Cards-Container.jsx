import Card from "../utilities/Card";
import "./Cards-Container.css";

const CardContainer = () => {
  return (
    <div className="card-container">
      <h2 className="card-container__heading">
        Check out these Epic Destinations!
      </h2>
      <div className="card-grid">
        <Card
          image={"/source-folder/images/img-8.jpg"}
          sutitle={"Adventure"}
          text={"Explorer the hidden waterfall deep inside the Amazon jungle"}
        />
        <Card
          image={"/source-folder/images/img-4.jpg"}
          sutitle={"Luxury"}
          text={"Travel through the island of Bali in a Private Cruise"}
        />
        <Card
          image={"/source-folder/images/img-9.jpg"}
          sutitle={"Travel"}
          text={"Cannioynig in Singapore"}
        />
        <Card
          image={"/source-folder/images/img-8.jpg"}
          sutitle={"Travel"}
          text={"Cannioynig in Singapore"}
        />
        <Card
          image={"/source-folder/images/img-8.jpg"}
          sutitle={"Travel"}
          text={"Cannioynig in Singapore"}
        />
        <Card
          image={"/source-folder/images/img-8.jpg"}
          sutitle={"Travel"}
          text={"Cannioynig in Singapore"}
        />
        <Card
          image={"/source-folder/images/img-8.jpg"}
          sutitle={"Travel"}
          text={"Cannioynig in Singapore"}
        />
      </div>
    </div>
  );
};

export default CardContainer;
