import { useLocation } from "react-router-dom";
import HeroSection from "../components/HeroSection.jsx";
import RecipeList from "../components/RecipeList.jsx";
import { useFetch } from "../hooks/useFetch.js";

const SearchResults = () => {
    const location = useLocation();
    const query = new URLSearchParams(location.search).get("query");

    let { data, loading, error } = useFetch(`${import.meta.env.VITE_API_URI}/api/recipes`)
    
    if (loading) return <p>Loading...</p>; // TODO: @bhumika: add styling if required
    if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;

    const recipes = data.filter((recipe) =>
        recipe.title?.toLowerCase().includes(query.toLowerCase())
    );

    return (
        <>
            <HeroSection
                title={`Search results for : ${query}`}
                subtitle={`Total ${recipes.length} Recipes`}
            />
            <RecipeList recipes = {recipes} isCarousel={false} />
        </>
    );
};

export default SearchResults;
