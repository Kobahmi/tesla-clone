import model3pic from "../images/model3.jpg";

const Model3 = () => {
  return (
    <section className="model-3">
      <img className="model-3-pic" src={model3pic} alt="model 3" />
      <div className="text-container">
        <h1>Model 3</h1>
        <p>
          Order Online for <span>Touchless Delivery</span>
        </p>
      </div>
      <div className="button-container">
        <button className="custom-order">
          <h3>Custom Order</h3>
        </button>
        <button className="existing-inventory">
          <h3>Existing Inventory</h3>
        </button>
      </div>
    </section>
  );
};

export default Model3;
