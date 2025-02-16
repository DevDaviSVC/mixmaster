import { useNavigate } from "react-router-dom";
import CocktailPage from "../assets/wrappers/CocktailPage.js";

const Cocktail = () => {
  const navigate = useNavigate();

  const handleBackHome = () => {
    navigate("/");
  }

  return (
    <CocktailPage className="page">
      <header>
        <button className="btn" type="button" onClick={handleBackHome}>
          Back Home
        </button>
        <h4>GG</h4>
      </header>
      <div className="drink">
        <img src="" alt="" className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            GG
          </p>
          <p>
            <span className="drink-data">Category:</span>
            GG
          </p>
          <p>
            <span className="drink-data">Info:</span>
            GG
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            GG
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            GG
          </p>
          <p>
            <span className="drink-data">Instructions:</span>
            GG
          </p>
        </div>
      </div>
    </CocktailPage>
  );
}
export default Cocktail;