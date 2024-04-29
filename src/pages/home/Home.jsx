import Banner from "../../components/Banner";
import FeaturedCrafts from "../../components/FeaturedCrafts";

const Home = () => {
  return (
    <main>
      <Banner />
      <section className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz">
        <h1 className="text-center mb-4 text-3xl font-medium">
          Featured Crafts
        </h1>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <FeaturedCrafts />
          <FeaturedCrafts />
          <FeaturedCrafts />
          <FeaturedCrafts />
          <FeaturedCrafts />
        </section>
      </section>
    </main>
  );
};

export default Home;
