import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import client from "../../utils/axios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/shared/Spinner";
import CraftsList from "../../components/CraftsList";

const MyArtAndCraftList = () => {
  const { user } = useAuth();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myCrafts"],
    queryFn: () =>
      client("get", `/painting-and-drawing/${user.uid}/?myCraft=true`).then(
        (res) => res.data
      ),
  });
  return (
    <section className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz px-6 my-12">
      <Helmet>
        <title>My Art And Craft</title>
      </Helmet>
      <h1 className="text-2xl mb-6">My Art and Craft</h1>
      {isLoading ? (
        <Spinner />
      ) : (
        <CraftsList crafts={data} myCrafts={true} refetch={refetch} />
      )}
    </section>
  );
};

export default MyArtAndCraftList;
