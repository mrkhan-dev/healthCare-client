import {useQuery} from "@tanstack/react-query";
import UseAxiosPublic from "../../hooks/UseAxiosPublic";
import useAuth from "../../hooks/useAuth";

const UserProfile = () => {
  const {user} = useAuth();
  const axiosPublic = UseAxiosPublic();
  const {data: userInfo = []} = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/userInfo/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div>
      <h3 className="text-5xl text-center">My Profile </h3>
      {userInfo.map((user) => (
        <div key={user._id}>
          <p>{user.name}</p>
          <p>{user.bloodGroup}</p>
          <p>{user.district}</p>
          <p>{user.upazila}</p>
        </div>
      ))}
    </div>
  );
};

export default UserProfile;
