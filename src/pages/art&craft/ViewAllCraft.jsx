import { useLoaderData } from "react-router-dom";
import CraftsList from "../../components/CraftsList";
import Spinner from "../../components/shared/Spinner";

const ViewAllCraft = () => {
  const data = useLoaderData();
  return (
    <section className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz px-6 my-12">
      <h1 className="text-2xl mb-6">All Art and Craft</h1>
      {data.length != 0 ? <CraftsList crafts={data} /> : <Spinner />}
    </section>
  );
};

export default ViewAllCraft;
