import {useQuery} from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import {Link} from "react-router-dom";

const FeatureTest = () => {
  const axiosPublic = UseAxiosPublic();
  const {data: FeatureTest = []} = useQuery({
    queryKey: ["featureTest"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allTests");
      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-center text-4xl font-Lora mt-8 mb-4">Feature Test</h2>
      <div className="grid grid-cols-4 gap-4 lg:w-[1440px] mx-auto">
        {FeatureTest.slice(3, 11).map((test) => (
          <div
            key={test._id}
            className="max-w-xs p-6 rounded-md shadow-md dark:bg-gray-50 dark:text-gray-900"
          >
            <img
              src={test.image}
              alt=""
              className="object-cover object-center w-full rounded-md h-52 dark:bg-gray-500"
            />
            <div className="mt-6 mb-2">
              <div className="flex justify-between ">
                <p className="text-lg font-medium tracking-widest uppercase dark:text-violet-600">
                  {new Date(test.date).toLocaleDateString()}
                </p>
                <span className="text-lg font-medium tracking-widest  uppercase dark:text-violet-600">
                  ${test.price}
                </span>
              </div>
              <p className="dark:text-gray-800">Slots: {test.slots}</p>
              <h2 className="text-xl font-semibold tracking-wide">
                Test Name: {test.testName}
              </h2>
            </div>

            <div className="flex justify-end">
              <Link to={`/testDetails/${test?._id}`}>
                <button className="btn text-md flex lg:ml-0 font-semibold px-5 bg-[#00F515] text-[#112A46] font-Lora ">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureTest;
