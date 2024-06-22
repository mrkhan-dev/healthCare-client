import {useQuery} from "@tanstack/react-query";
import UseAxiosSecure from "./UseAxiosSecure";
import useAuth from "./useAuth";

const UseStatus = () => {
  const axiosSecure = UseAxiosSecure();
  const {user} = useAuth();
  const {data: isBlocked} = useQuery({
    queryKey: [user?.email, "isBlocked"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/status/${user?.email}`);
      return res.data?.block;
    },
  });
  return [isBlocked];
};

export default UseStatus;
