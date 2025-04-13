import { useNavigate } from "react-router-dom";
import CocktailCardWrapper from "../../assets/wrappers/CocktailCard.js";

const CocktailCard = ({cocktail}) => {
    const navigate = useNavigate();
    const handleClick = () => {
        navigate(`/cocktail/${cocktail.idDrink}`);
    };

  return (
    <CocktailCardWrapper>
        <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} className="img" />
      <div className="footer">
        <h4>{cocktail.strDrink}</h4>
        <h5>{cocktail.strGlass}</h5>
        <p>{cocktail.strAlcoholic}</p>
        <button className="btn" type="button" onClick={handleClick}>
          details
        </button>
      </div>
    </CocktailCardWrapper>
  );
};
export default CocktailCard;
