import { useQuery } from "@tanstack/react-query";
import Banner from "../../components/Banner";
import FeaturedCrafts from "../../components/FeaturedCrafts";
import client from "../../utils/axios";
import Spinner from "../../components/shared/Spinner";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const { data: featuredCraft, isLoading: featuredCraftIsLoading } = useQuery({
    queryKey: ["homeFeaturedCrafts"],
    queryFn: () =>
      client("get", "/painting-and-drawing/?featured=true").then(
        (res) => res.data
      ),
  });
  return (
    <main>
      <Banner />
      <section className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz">
        <Helmet>
          <title>CraftyCanvas</title>
        </Helmet>
        <h1 className="text-center mb-4 text-3xl font-medium">
          Featured Crafts
        </h1>
        {featuredCraftIsLoading ? (
          <Spinner />
        ) : (
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {featuredCraft.map((craft) => (
              <FeaturedCrafts key={craft._id} item={craft} />
            ))}
          </section>
        )}
        <div className="w-fit mx-auto">
          <Link to="/item" className="btn btn-outline px-12 my-12">
            See All
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;
