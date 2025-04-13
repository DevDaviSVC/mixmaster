import ErrorPage from "../assets/wrappers/ErrorPage.js";
import notFoundSVG from "../assets/not-found.svg";
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
console.log(error);

  if (error.status === 404) {
      return (
        <ErrorPage className="page">
          <img src={notFoundSVG} alt="not-found" />
          <h3>Ohh!</h3>
          <p>We can't seem to find the page you are looking for.</p>
          <Link>Back Home</Link>
        </ErrorPage>
      );
  }

  return (
    <ErrorPage className="page">
      <h3>There was an error...</h3>
    </ErrorPage>
  );
};
export default Error;
