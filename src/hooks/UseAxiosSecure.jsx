import axios from "axios";
import {useNavigate} from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
  baseURL: "https://health-hub-server-puce.vercel.app",
});

const UseAxiosSecure = () => {
  const {logOut} = useAuth();
  const navigate = useNavigate();
  axiosSecure.interceptors.request.use(
    function (config) {
      const token = localStorage.getItem("access-token");
      // ("request stopped by interceptors", token);
      config.headers.authorization = `B ${token}`;
      return config;
    },
    function (error) {
      return Promise.reject(error);
    }
  );

  // interceptors status code
  axiosSecure.interceptors.response.use(
    (response) => {
      return response;
    },
    async (err) => {
      const status = err.response.status;
      "status error", status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/signIn");
      }
      return Promise.reject(err);
    }
  );
  return axiosSecure;
};

export default UseAxiosSecure;
