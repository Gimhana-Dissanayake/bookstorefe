import React from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserToken } from "../../module/user/userSelector";

const Auth = ({ children }) => {
  const navigate = useNavigate();
  const token = useSelector(getUserToken);

  const getView = () => {
    if (!token) {
      navigate("/login");
    }

    return children;
  };

  return <div>{getView()}</div>;
};

export default Auth;
