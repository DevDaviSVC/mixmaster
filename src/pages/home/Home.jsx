import { useLoaderData } from "react-router-dom";
import axios from "axios";
import SearchForm from "../components/SearchForm.jsx";
import CocktailList from "../components/CocktailList.jsx";
import { useQuery } from "@tanstack/react-query";

const searchCocktailsQuery = (searchTerm) => {
  return {
    queryKey: ["search", searchTerm || "all"],
    queryFn: async () => {
      const response = await axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`
      );
      return response?.data?.drinks;
    },
  };
};

export const homeLoader = (queryClient) => async ({ request }) => {
  const url = new URL(request.url);
  const searchTerm = url.searchParams.get("search") || "all";
  await queryClient.ensureQueryData(searchCocktailsQuery(searchTerm));
  return { searchTerm };
};

const Home = () => {
  const { searchTerm } = useLoaderData();
  const { data: drinks, isPending: isLoading } = useQuery(
    searchCocktailsQuery(searchTerm)
  );

  return (
    <main>
      <SearchForm searchTerm={searchTerm} />
      {isLoading ? (
        <div className="loading" style={{width: "50px", height: "50px"}}></div>
      ) : (
        <CocktailList drinks={drinks} />
      )}
    </main>
  );
};
export default Home;
