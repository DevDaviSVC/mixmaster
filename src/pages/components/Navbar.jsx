import { Link } from "react-router-dom";
import NavbarWrapper from "../../assets/wrappers/Navbar.js";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className="nav-center">
        <div className="logo">MixMaster</div>
        <div className="nav-links">
          <Link className="nav-link" to={"/"}>
            Home
          </Link>
          <Link className="nav-link" to={"/about"}>
            About
          </Link>
          <Link className="nav-link" to={"/newsletter"}>
            Newsletter
          </Link>
        </div>
      </div>
    </NavbarWrapper>
  );
};
export default Navbar;
