import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";

// Import image
import image1 from "../../assets/banner-image/doctor1.png";
import image2 from "../../assets/banner-image/doc4.png";
import image3 from "../../assets/banner-image/doc3.png";

// import required modules
import {EffectFade, Autoplay} from "swiper/modules";
const Banner = () => {
  return (
    <div className="bg-[#F1FCE9]">
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        fadeEffect={{crossFade: true}}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[EffectFade, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="md:h-[600px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 lg:ml-40 mt-10 md:mt-0 w-full md:w-auto">
                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Landscape Painting
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Mountain view canvas, Forest based Landscape painting
                </p>
              </div>

              {/* left */}
              <div className="flex-1 mb-10 md:mb-0">
                <img
                  className="md:h-[500px] h-full mt-24 rounded-xl object-cover bg-cover md:w-[700px] w-full"
                  src={image1}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[600px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 lg:ml-40 mt-10 md:mt-0 w-full md:w-auto">
                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Landscape Painting
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Mountain view canvas, Forest based Landscape painting
                </p>
              </div>

              {/* left */}
              <div className="flex-1 mb-10 md:mb-0">
                <img
                  className="md:h-[500px] lg:w-[700px] h-full mt-24 rounded-xl object-cover bg-cover md:w-[700px] "
                  src={image3}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="md:h-[600px] h-auto">
            <div className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center">
              <div className="flex-1 lg:ml-40 mt-10 md:mt-0 w-full md:w-auto">
                <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                  Landscape Painting
                </p>
                <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                  Mountain view canvas, Forest based Landscape painting
                </p>
              </div>

              {/* left */}
              <div className="flex-1 mb-10 md:mb-0">
                <img
                  className="md:h-[500px] lg:w-[700px] h-full mt-24 rounded-xl object-cover bg-cover md:w-[700px]"
                  src={image2}
                  alt=""
                />
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* <button>kdkd</button> */}
    </div>
  );
};

export default Banner;
