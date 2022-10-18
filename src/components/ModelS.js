import modelSpic from "../images/model-s.jpg";
import arrow from "../images/arrow.svg";

const ModelS = (props) => {
  const { link } = props;
  return (
    <section className="model-s">
      <img className="model-s-pic" src={modelSpic} alt="model S" />
      <div className="text-container">
        <h1>Model S</h1>
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
      <a href={link} className="arrow-container">
        <img className="arrow" src={arrow} alt="arrow" />
      </a>
    </section>
  );
};

export default ModelS;
