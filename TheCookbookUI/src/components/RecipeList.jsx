import RecipeCard from "./RecipeCard";
import Slider from "react-slick";
import { useFetch } from "../hooks/useFetch.js";

const RecipeList = ({ recipes, isCarousel = false }) => {
    const {
        data: fetchedRecipes,
        loading,
        _,
    } = useFetch(!recipes ? `${import.meta.env.VITE_API_URI}/api/recipes` : null);

    const cards = recipes || fetchedRecipes || [];

    if (loading) return <p className="p-6">Loading recipes...</p>; //  TODO: @bhumika: add styling if required

    // if is carousel
    if (isCarousel) {
        const settings = {
            dots: true,
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: false,
            speed: 500,
            responsive: [
                { breakpoint: 1024, settings: { slidesToShow: 2 } },
                { breakpoint: 640, settings: { slidesToShow: 1 } },
            ],
        };

        return (
            <div className="overflow-hidden p-6">
                <Slider {...settings}>
                    {cards.map((card) => (
                        <div key={card._id} className="p-5">
                            <RecipeCard card={card} />
                        </div>
                    ))}
                </Slider>
            </div>
        );
    }

    // if is not carousel
    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-6 xl:p-12 p-6 font-fira">
            {cards.map((card) => (
                <RecipeCard key={card._id} card={card} />
            ))}
        </div>
    );
};

export default RecipeList;
