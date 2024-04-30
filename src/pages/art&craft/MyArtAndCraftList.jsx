import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import client from "../../utils/axios";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/shared/Spinner";
import CraftsList from "../../components/CraftsList";

const MyArtAndCraftList = () => {
  const [sort, setSort] = React.useState("default");
  const { user } = useAuth();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["myCrafts"],
    queryFn: () =>
      client("get", `/painting-and-drawing/${user.uid}/?myCraft=true`).then(
        (res) => res.data
      ),
  });
  React.useEffect(() => {
    console.log(sort);
  }, [sort]);
  // if (!isLoading)
  // data.sort((d1, d2) => {
  //   const val1 = d1.itemCustomization.toLowerCase(),
  //     val2 = d2.itemCustomization.toLowerCase();
  //   if (val1 < val2) {
  //     return -1;
  //   }
  //   if (val1 > val2) {
  //     return 1;
  //   }
  //   return 0;
  // });

  return (
    <section className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz px-6 my-12">
      <Helmet>
        <title>My Art And Craft</title>
      </Helmet>
      <div className="flex items-center justify-between pr-20">
        <h1 className="text-2xl mb-6">My Art and Craft</h1>
        <div className="dropdown dropdown-hover dropdown-left">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-outline text-base m-1"
          >
            Filter By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <button className="btn" onClick={() => setSort("default")}>
              Default
            </button>
            <button className="btn" onClick={() => setSort("customizable")}>
              Customizable
            </button>
            <button className="btn" onClick={() => setSort("non-customizable")}>
              Non-Customizable
            </button>
          </ul>
        </div>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <CraftsList
          crafts={
            sort === "default"
              ? data.sort((d1, d2) => {
                  const val1 = d1._id.toLowerCase(),
                    val2 = d2._id.toLowerCase();
                  if (val1 < val2) {
                    return -1;
                  }
                  if (val1 > val2) {
                    return 1;
                  }
                  return 0;
                })
              : sort === "customizable"
              ? data.sort((d1, d2) => {
                  const val1 = d1.itemCustomization.toLowerCase(),
                    val2 = d2.itemCustomization.toLowerCase();
                  if (val1 < val2) {
                    return 1;
                  }
                  if (val1 > val2) {
                    return -1;
                  }
                  return 0;
                })
              : data.sort((d1, d2) => {
                  const val1 = d1.itemCustomization.toLowerCase(),
                    val2 = d2.itemCustomization.toLowerCase();
                  if (val1 < val2) {
                    return -1;
                  }
                  if (val1 > val2) {
                    return 1;
                  }
                  return 0;
                })
          }
          myCrafts={true}
          refetch={refetch}
        />
      )}
    </section>
  );
};

export default MyArtAndCraftList;
