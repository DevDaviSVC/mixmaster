import { useNavigation } from "react-router-dom";
import SearchFormWrapper from "../../assets/wrappers/SearchForm.js";

const SearchForm = ({searchTerm}) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <SearchFormWrapper>
      <form className="form">
        <input type="text" className="form-input" defaultValue={searchTerm !== "all" ? searchTerm : "Vodka"} name="search"/>
        <button type="submit" className="btn" disabled={isSubmitting}>
          {isSubmitting ? "Searching..." : "Search"}
        </button>
      </form>
    </SearchFormWrapper>
  );
};
export default SearchForm;
