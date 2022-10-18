import modelXpic from "../images/modelx.jpg";

const ModelX = () => {
  return (
    <section className="model-x">
      <img className="model-x-pic" src={modelXpic} alt="model X" />
      <div className="text-container">
        <h1>Model X</h1>
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

export default ModelX;
