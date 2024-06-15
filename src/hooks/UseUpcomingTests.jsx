import {useQuery} from "@tanstack/react-query";
import UseAxiosPublic from "./UseAxiosPublic";

const UseUpcomingTests = () => {
  const axiosPublic = UseAxiosPublic();
  const {data: upcomingTest = []} = useQuery({
    queryKey: ["upcomingTest"],
    queryFn: async () => {
      const res = await axiosPublic.get("/upcomingTest");
      return res.data;
    },
  });
  return [upcomingTest];
};

export default UseUpcomingTests;
