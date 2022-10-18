import accessories from "../images/accessories.jpg";

const Accessories = () => {
  return (
    <section className="accessories">
      <img className="accessories-pic" src={accessories} alt="accessories" />
      <div className="text-container">
        <h1>Accessories</h1>
      </div>
      <div className="button-container">
        <button className="custom-order" id="accessory">
          <h3>Shop Now</h3>
        </button>
      </div>
    </section>
  );
};

export default Accessories;
