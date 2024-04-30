import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Banner from "../../components/Banner";
import client from "../../utils/axios";
import Spinner from "../../components/shared/Spinner";
import FeaturedCrafts from "../../components/FeaturedCrafts";
import SubCategoryInfo from "../../components/SubCategoryInfo";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";

const Home = () => {
  const { data: featuredCraft, isLoading: featuredCraftIsLoading } = useQuery({
    queryKey: ["homeFeaturedCrafts"],
    queryFn: () =>
      client("get", "/painting-and-drawing/?featured=true").then(
        (res) => res.data
      ),
  });

  const { data: subCategory, isLoading: subCategoryIsLoading } = useQuery({
    queryKey: ["subCategory"],
    queryFn: () => client("get", "/sub-category").then((res) => res.data),
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
        <h1 className="text-center mb-4 text-3xl font-medium">
          Our Categories
        </h1>
        <Swiper
          className="mb-12"
          loop={subCategoryIsLoading || true}
          slidesPerView={subCategoryIsLoading ? 1 : 4}
          spaceBetween={50}
          autoplay={{ delay: 2000 }}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Navigation, Pagination]}
        >
          {subCategoryIsLoading ? (
            <SwiperSlide>
              <Spinner />
            </SwiperSlide>
          ) : (
            subCategory.map((item) => (
              <SwiperSlide key={item._id}>
                <SubCategoryInfo item={item} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </section>
    </main>
  );
};

export default Home;
