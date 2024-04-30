import { useQuery } from "@tanstack/react-query";
import { Element } from "react-scroll";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";
import client from "../../utils/axios";
import Banner from "../../components/Banner";
import Spinner from "../../components/shared/Spinner";
import FeaturedCrafts from "../../components/FeaturedCrafts";
import SubCategoryInfo from "../../components/SubCategoryInfo";
import Feedback from "../../components/Feedback";
import Aboutus from "../../components/Aboutus";

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
      </section>
      <section className="bg-base-200 py-14">
        <div className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz">
          <h1 className="text-center mb-4 text-3xl font-medium">
            Our Categories
          </h1>
          {subCategoryIsLoading ? (
            <Spinner />
          ) : (
            <Swiper
              className="mb-12 max-w-xs min-[640px]:max-w-max"
              loop={true}
              autoplay={{ delay: 2000 }}
              navigation={true}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
                1200: {
                  slidesPerView: 4,
                  spaceBetween: 50,
                },
              }}
              modules={[Autoplay, Navigation, Pagination]}
            >
              {subCategory.map((item) => (
                <SwiperSlide key={item._id}>
                  <SubCategoryInfo item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
          )}
        </div>
      </section>
      <Element name="feedback">
        <h1 className="text-center my-8 text-3xl font-medium">Feedback</h1>
        <Feedback />
      </Element>
      <section className="container xl:max-w-screen-xl mx-auto font-yanone-kaffeesatz mb-12">
        <Element name="about-us">
          <h1 className="text-center my-8 text-3xl font-medium">About us</h1>
          <Aboutus />
        </Element>
      </section>
    </main>
  );
};

export default Home;
