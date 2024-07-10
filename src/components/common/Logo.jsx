import React from "react";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src={process.env.PUBLIC_URL + "/images/logo_1x.png"} alt="Logo" />
    </Link>
  );
};

export default Logo;
