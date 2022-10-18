import close from "../images/close.svg";

const Menu = (props) => {
  const { menu } = props;

  return (
    <div className="menu" style={{ display: menu }}>
      <div className="left"></div>
      <div className="right">
        <div className="close-container">
          <img className="close" src={close} alt="close" />
        </div>
        <ul className="menu-list">
          <div className="menu-products-list">
            <li>
              <h3>Model S</h3>
            </li>
            <li>
              <h3>Model 3</h3>
            </li>
            <li>
              <h3>Model X</h3>
            </li>
            <li>
              <h3>Model Y</h3>
            </li>
            <li>
              <h3>Cybertruck</h3>
            </li>
            <li>
              <h3>Powerwall</h3>
            </li>
          </div>
          <li>
            <h3>Existing Inventory</h3>
          </li>
          <li>
            <h3>Used Inventory</h3>
          </li>
          <li>
            <h3>Trade-In</h3>
          </li>
          <li>
            <h3>Test Drive</h3>
          </li>
          <li>
            <h3>Roadster</h3>
          </li>
          <li>
            <h3>Semi</h3>
          </li>
          <li>
            <h3>Commercial Energy</h3>
          </li>
          <li>
            <h3>Utilities</h3>
          </li>
          <li>
            <h3>Energy</h3>
          </li>
          <li>
            <h3>Charging</h3>
          </li>
          <li>
            <h3>Find Us</h3>
          </li>
          <li>
            <h3>Support</h3>
          </li>
          <li>
            <h3>Investor Relations</h3>
          </li>
          <div className="menu-products-list">
            <li>
              <h3>Shop</h3>
            </li>
            <li>
              <h3>Account</h3>
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
