import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://health-hub-server-puce.vercel.app",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
