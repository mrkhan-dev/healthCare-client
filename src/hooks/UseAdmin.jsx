import {useQuery} from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const UseAdmin = () => {
  const axiosSecure = UseAxiosSecure();
  const {user} = useAuth();
  const {data: isAdmin} = useQuery({
    queryKey: [user?.email, "isAdmin"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/admin/${user.email}`);
      return res.data?.admin;
    },
  });
  return [isAdmin];
};

export default UseAdmin;
