// import required modules
import {Link} from "react-router-dom";
import UseAxiosSecure from "../../hooks/UseAxiosSecure";
import {useQuery} from "@tanstack/react-query";
import {RotatingLines} from "react-loader-spinner";
const Banner = () => {
  const axiosSecure = UseAxiosSecure();

  const {data: banner = [], isLoading} = useQuery({
    queryKey: ["banner"],
    queryFn: async () => {
      const res = await axiosSecure.get("/banner");
      return res.data;
    },
  });

  if (isLoading) {
    return (
      <div className="flex justify-center mt-96">
        <RotatingLines
          visible={true}
          height="96"
          width="96"
          color="grey"
          strokeWidth="5"
          animationDuration="0.75"
          ariaLabel="rotating-lines-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    );
  }

  return (
    <div className="bg-[#F1FCE9] relative">
      <div className="md:h-[600px] h-auto">
        {banner.map((banner) => (
          <div
            key={banner._id}
            className="h-full flex flex-col md:flex-row justify-between md:gap-2 gap-10 items-center"
          >
            <div className="flex-1 lg:ml-40 mt-10 md:mt-0 w-full md:w-auto">
              <p className="xl:text-[50px] lg:text-[40px] md:text-[32px] text-[30px] font-bold text-center md:text-left">
                {banner.title}
              </p>
              <p className="font-medium text-black/60 md:text-lg text-center md:text-left">
                {banner.shortText}
              </p>
              <Link to="/allTests">
                <button className="btn  bg-green-400 ">Learn More</button>
              </Link>
            </div>

            {/* left */}
            <div className="flex-1 mb-10 md:mb-0">
              <img
                className="md:h-[500px] h-full mt-24 rounded-xl object-cover bg-cover md:w-[700px] w-full"
                src={banner.image}
                alt=""
              />
              <div className="absolute mt-[-290px] ml-56 bg-green-400 text-center text-lg font-Lora py-8 px-6 rounded-lg">
                <p>Special offer</p>
                <p>Get 20% OFF your next purchase!</p>
                <p>Coupon Code</p>
                <p className="text-white text-xl border">{banner.couponCode}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
