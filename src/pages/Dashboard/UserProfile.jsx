import {useQuery} from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import useAuth from "../../hooks/useAuth";
import {RotatingLines} from "react-loader-spinner";

const UserProfile = () => {
  const {user} = useAuth();
  const axiosPublic = UseAxiosPublic();
  const {data: userInfo = [], isLoading} = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/userInfo/${user?.email}`);
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
    <div className=" lg:mt-36 flex justify-center">
      {userInfo.map((user) => (
        <div
          key={user._id}
          className="flex flex-col lg:w-[900px]  justify-center p-6 shadow-md rounded-xl sm:px-12 dark:bg-gray-50 dark:text-gray-800"
        >
          <img
            src={user.image}
            alt=""
            className="w-32 h-32 mx-auto rounded-full dark:bg-gray-500 aspect-square"
          />
          <div className="space-y-4 text-center divide-y dark:divide-gray-300">
            <div className="my-2 space-y-1">
              <h2 className="text-xl font-semibold sm:text-2xl">{user.name}</h2>
              <p className="px-5 text-xs sm:text-base dark:text-gray-600">
                Email: {user.email}
              </p>
              <p>District: {user.district}</p>
              <p>Upazila: {user.upazila}</p>
              <p>Blood Group: {user.bloodGroup}</p>
            </div>
          </div>
          <div className="justify-end flex">
            <button className="btn ">Update Profile</button>
          </div>
        </div>
      ))}
      <div></div>
    </div>
  );
};

export default UserProfile;
