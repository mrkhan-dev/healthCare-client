import {Helmet} from "react-helmet-async";
import Nav from "../../shared/Nav";
import {useQuery} from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import {useParams} from "react-router-dom";

const TestDetails = () => {
  const axiosPublic = UseAxiosPublic();
  const {id} = useParams();

  const {data: test = []} = useQuery({
    queryKey: ["details", id],
    queryFn: async () => {
      const res = await axiosPublic.get(`/testDetails/${id}`);
      return res.data;
    },
  });

  return (
    <div>
      <Helmet>
        <title>Health Hub | test details</title>
      </Helmet>
      <div className="h-20">
        <Nav />
      </div>
      <div className="max-w-5xl mx-auto mt-4">
        <div className="flex justify-between px-3">
          <h3 className="text-4xl font-Lora font-medium">{test.testName}</h3>
          <p className="text-3xl font-medium font-Lora tracking-widest">
            ${test.price}
          </p>
        </div>
        <img
          className="w-full h-[480px] rounded-2xl mt-2"
          src={test.image}
          alt=""
        />
        <div className=" mt-4">
          <p className="text-xl font-medium font-Lora tracking-widest">
            Deadline: {new Date(test.date).toLocaleDateString()}
          </p>
          <p className="text-xl font-medium font-Lora tracking-widest">
            Slots: {test.slots}
          </p>
        </div>
        <hr className="mt-8 mb-8" />
        <p>{test.descriptions}</p>
        <hr className="mt-8 mb-8" />
        <div className="flex justify-end mb-8">
          <button className="btn text-lg flex lg:ml-0 font-semibold px-5 bg-[#00F515] text-[#112A46] font-Lora ">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default TestDetails;
