
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  return (
    <div className="header">
      <img
        className="logo"
        src={LOGO_URL}
      />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>contact Us</li>
          <li>cart</li>
        </ul>
      </div>
    </div>
  );
};
export default Header;