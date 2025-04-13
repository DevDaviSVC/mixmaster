import CocktailListWrapper from "../../assets/wrappers/CocktailList.js";
import CocktailCard from "../components/CocktailCard.jsx";

const CocktailList = ({ drinks }) => {
  return (
    <CocktailListWrapper>
      {drinks.map((cocktail) => (
        <CocktailCard cocktail={cocktail} key={cocktail.idDrink} />
      ))}
    </CocktailListWrapper>
  );
};
export default CocktailList;
