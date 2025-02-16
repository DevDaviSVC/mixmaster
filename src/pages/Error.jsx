import ErrorPage from "../assets/wrappers/ErrorPage.js";
import notFoundSVG from "../assets/not-found.svg";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <ErrorPage className="page">
      <img src={notFoundSVG} alt="not-found" />
      <h3>Ohh!</h3>
      <p>We can't seem to find the page you are looking for.</p>
      <Link>Back Home</Link>
    </ErrorPage>
  );
};
export default Error;
