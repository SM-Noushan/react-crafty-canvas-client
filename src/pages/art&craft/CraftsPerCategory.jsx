import { useLoaderData, useParams } from "react-router-dom";
import FeaturedCrafts from "../../components/FeaturedCrafts";
import { Helmet } from "react-helmet-async";

const CraftsPerCategory = () => {
  const crafts = useLoaderData();
  const { categoryName } = useParams();
  //   console.log(title);
  const title = categoryName
    .split(" ")
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(" ");
  return (
    <section className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz my-12 px-8">
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <h1 className="capitalize text-2xl">Category: {categoryName}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {crafts.map((craft) => (
          <FeaturedCrafts key={craft._id} item={craft} featured={false} />
        ))}
      </div>
    </section>
  );
};

export default CraftsPerCategory;
