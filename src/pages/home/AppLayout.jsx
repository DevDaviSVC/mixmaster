import { Link, Outlet } from "react-router-dom";
import Navbar from "../../assets/wrappers/Navbar.js";

const AppLayout = () => {
  return (
    <main>
      <Navbar>
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
      </Navbar>
      <Outlet />
    </main>
  );
};
export default AppLayout;
