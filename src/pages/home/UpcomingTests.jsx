import UseUpcomingTests from "../../hooks/UseUpcomingTests";
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import {Pagination} from "swiper/modules";

const UpcomingTests = () => {
  const [upcomingTest] = UseUpcomingTests();

  return (
    <div className="lg:w-[1440px] mx-auto mb-10">
      <h1 className="text-center font-Lora text-3xl mt-20 font-semibold">
        Upcoming Tests
      </h1>
      {
        <Swiper
          slidesPerView={4}
          spaceBetween={30}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {upcomingTest.map((test) => (
            <SwiperSlide key={test._id}>
              <div
                className="mt-10"
                style={{
                  backgroundImage: `url(${test.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  height: "400px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <h1 className="text-4xl uppercase text-center font-semibold -mt-16 font-Lora">
                  {test.testName}
                </h1>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      }
    </div>
  );
};

export default UpcomingTests;
