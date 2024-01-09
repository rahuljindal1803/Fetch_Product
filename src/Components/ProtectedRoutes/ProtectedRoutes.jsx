import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoutes = ({ Component }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);
  return <Component />;
};

ProtectedRoutes.propTypes = {
  Component: PropTypes.func.isRequired,
};

export default ProtectedRoutes;
