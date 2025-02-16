import SearchFormWrapper from "../../assets/wrappers/SearchForm.js";
import CocktailListWrapper from "../../assets/wrappers/CocktailList.js";
import CocktailCardWrapper from "../../assets/wrappers/CocktailCard.js";

const Home = () => {
  return (
    <main className="page">
      <SearchFormWrapper>
        <form className="form">
          <input type="text" className="form-input" />
          <button type="submit" className="btn">
            search
          </button>
        </form>
      </SearchFormWrapper>
      <CocktailListWrapper>
        <CocktailCardWrapper>
          <div className="footer">
            <h4>GG</h4>
            <h5>Collins Glass</h5>
            <p>Optional Alcohol</p>
            <button className="btn" type="button">
              details
            </button>
          </div>
        </CocktailCardWrapper>
      </CocktailListWrapper>
    </main>
  );
};
export default Home;
