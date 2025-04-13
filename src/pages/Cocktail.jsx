import { useLoaderData, useNavigate } from "react-router-dom";
import CocktailPage from "../assets/wrappers/CocktailPage.js";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

const cocktailQuery = (id) => {
  return {
    queryKey: ['cocktail', id],
    queryFn: async () => {
       const res = await axios.get(
         `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
       );
       return res;
    }
  }
}

export const cocktailLoader = (queryClient) => async ({params}) => {
  const {id} = params;
  await queryClient.ensureQueryData(cocktailQuery(id));
  return {id};
};

const Cocktail = () => {
  const navigate = useNavigate();
  const {id} = useLoaderData();
  
  const {data} = useQuery(cocktailQuery(id));
  
  if (!data) return <h2>Something went wrong...</h2>;

  const [drink] = data.data.drinks;

  // Organize ingredients in one String.
  const drinkIngredients = Object.keys(drink)
                          .filter(key => key.startsWith("strIngredient") && drink[key] !== null)
                          .map(key => drink[key]);
  ////

  // Simplify the syntax
  const formattedDrink = {
    name: drink.strDrink,
    category: drink.strCategory,
    info: drink.strAlcoholic,
    glass: drink.strGlass,
    ingredients: drinkIngredients.join(", "),
    instructions: drink.strInstructions,
    img: drink.strDrinkThumb,
  }
  ////

  const handleBackHome = () => {
    navigate("/");
  }

  return (
    <CocktailPage>
      <header>
        <button className="btn" type="button" onClick={handleBackHome}>
          Back Home
        </button>
        <h4></h4>
      </header>
      <div className="drink">
        <img src={formattedDrink.img} alt={formattedDrink.name} className="img" />
        <div className="drink-info">
          <p>
            <span className="drink-data">Name:</span>
            {formattedDrink.name}
          </p>
          <p>
            <span className="drink-data">Category:</span>
            {formattedDrink.category}
          </p>
          <p>
            <span className="drink-data">Info:</span>
            {formattedDrink.info}
          </p>
          <p>
            <span className="drink-data">Glass:</span>
            {formattedDrink.glass}
          </p>
          <p>
            <span className="drink-data">Ingredients:</span>
            {formattedDrink.ingredients}
          </p>
          <p>
            <span className="drink-data">Instructions:</span>
            {formattedDrink.instructions}
          </p>
        </div>
      </div>
    </CocktailPage>
  );
}
export default Cocktail;