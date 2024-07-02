import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://health-hub-server-dusky.vercel.app",
});

const UseAxiosPublic = () => {
  return axiosPublic;
};

export default UseAxiosPublic;
