import GenericPages from "../utilities/GenericPages";
import OffersPage from "./OffersPage";

const Productions = () => {
  return (
    <>
      <GenericPages
        imageLocation={"/source-folder/images/img-4.jpg"}
        pageText="PRODUCTS"
      />
      <OffersPage />
    </>
  );
};

export default Productions;
