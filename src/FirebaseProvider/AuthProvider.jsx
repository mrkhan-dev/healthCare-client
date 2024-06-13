import {createContext} from "react";
import PropTypes from "prop-types";

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const values = {
    value: "value",
  };
  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
