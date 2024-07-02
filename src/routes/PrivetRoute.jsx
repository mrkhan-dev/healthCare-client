import {Navigate, useLocation} from "react-router-dom";
import useAuth from "../hooks/useAuth";
import {FallingLines} from "react-loader-spinner";
import PropTypes from "prop-types";

const PrivetRoute = ({children}) => {
  const {user, loading} = useAuth();
  const path = useLocation();

  if (loading) {
    return (
      <div className="flex justify-center items-center mt-48">
        <FallingLines
          color="#4fa94d"
          width="100"
          visible={true}
          ariaLabel="falling-circles-loading"
        />
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/signIn" state={path?.pathname || "/"} />;
  }
  return <div>{children}</div>;
};

PrivetRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivetRoute;
