import modelYpic from "../images/modely.jpg";

const ModelY = () => {
  return (
    <section className="model-y" id="model-y">
      <img className="model-y-pic" src={modelYpic} alt="model Y" />
      <div className="text-container">
        <h1>Model Y</h1>
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

export default ModelY;
