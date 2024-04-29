import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Parallax } from "swiper/modules";
import "swiper/css";
import "swiper/css/bundle";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <section className="font-yanone-kaffeesatz bg-base-200 py-20 my-8">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className="self-end hidden md:block">
          <img
            src="https://artcrafts.wpengine.com/wp-content/uploads/revslider/art-home/slider1.png"
            alt="banner-image"
          />
        </div>

        <div className="self-start">
          <Swiper
            className="mySwiper"
            loop={true}
            autoplay={{ delay: 2000 }}
            parallax={true}
            navigation={true}
            modules={[Autoplay, Navigation, Parallax]}
          >
            <SwiperSlide>
              <div className="w-fit mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=1962&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="banner-image"
                  className="rounded-sm p-4 border-4 border-amber-400 border-double max-h-[400px] mb-4 w-[320px]"
                />
                <div className="text-sm lg:text-xl" data-swiper-parallax="-300">
                  <p>
                    <span className="font-medium text-blue-400">Category:</span>{" "}
                    Portrait
                  </p>
                  <p>
                    <span className="font-medium text-blue-400">
                      Artist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>{" "}
                    Neo Art
                  </p>
                  <p>
                    <span className="font-medium text-blue-400">
                      Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>{" "}
                    10,000 BDT
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-fit mx-auto">
                <img
                  src="https://images.unsplash.com/photo-1549289524-06cf8837ace5?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="banner-image"
                  className="rounded-sm p-4 border-4 border-amber-400 border-double max-h-[400px] mb-4 w-[320px]"
                />
                <div className="text-sm lg:text-xl" data-swiper-parallax="-300">
                  <p>
                    <span className="font-medium text-blue-400">Category:</span>{" "}
                    Portrait
                  </p>
                  <p>
                    <span className="font-medium text-blue-400">
                      Artist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>{" "}
                    Canvas Art
                  </p>
                  <p>
                    <span className="font-medium text-blue-400">
                      Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>{" "}
                    12,000 BDT
                  </p>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="w-fit mx-auto">
                <img
                  src="https://plus.unsplash.com/premium_photo-1664013263421-91e3a8101259?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="rounded-sm p-4 border-4 border-amber-400 border-double max-h-[400px] mb-4 w-[320px]"
                />
                <div className="text-sm lg:text-xl" data-swiper-parallax="-300">
                  <p>
                    <span className="font-medium text-blue-400">Category:</span>{" "}
                    Oil Painting
                  </p>
                  <p>
                    <span className="font-medium text-blue-400">
                      Artist:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>{" "}
                    Unsplash Art
                  </p>
                  <p>
                    <span className="font-medium text-blue-400">
                      Price:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </span>{" "}
                    20,000 BDT
                  </p>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>

        <div className="self-end hidden md:block">
          <img
            src="https://artcrafts.wpengine.com/wp-content/uploads/revslider/art-home/slider2.png"
            alt="banner-image"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
