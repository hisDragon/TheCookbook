import HeroSection from "../components/HeroSection.jsx";
import ContentSection from "../components/ContentSection.jsx";
import HomePageBackground from "../assets/Home_Page_BG2.jpg"
import RecipeList from "../components/RecipeList.jsx";

const HomePage = () => {
  return (
    <>
      <HeroSection
        bgImage={HomePageBackground}
        title="The Cookbook Recipes"
        subtitle="Explore and share daily cooking ideas with our recipes. Discover dishes, videos, tips, and inspiration tailored to your tastes and the community you connect with."
      />
      <section className="py-15 text-center relative font-fira">
        <h1 className="p-2 font-bold text-3xl">New Recipes</h1>
        <p className="p-6">
          Explore our latest recipes, from quick snacks to hearty meals and
          indulgent desserts.
        </p>
        <RecipeList isCarousel={true} />
      </section>
      <ContentSection />
    </>
  );
};

export default HomePage;
