import logo from "../images/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo" />

      <div className="header-products">
        <ul className="header-products-list">
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
        </ul>
      </div>
      <div className="nav">
        <ul className="nav-list">
          <div className="nav-list-burger">
            <li>
              <h3>Shop</h3>
            </li>
            <li>
              <h3>Account</h3>
            </li>
          </div>
          <li>
            <button className="menu-btn" type="button">
              <h3>Menu</h3>
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
