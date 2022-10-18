import solar from "../images/solarpanel.jpg";

const Solar = () => {
  return (
    <section className="solar">
      <img className="solar-pic" src={solar} alt="solar" />
      <div className="text-container">
        <h1 id="solar">Solar and Powerwall</h1>
        <p>Power Everything</p>
      </div>
      <div className="button-container">
        <button className="custom-order">
          <h3>Learn More</h3>
        </button>
      </div>
    </section>
  );
};

export default Solar;
