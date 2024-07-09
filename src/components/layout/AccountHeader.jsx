import React from "react";
import { Link } from "react-router-dom";

const AccountHeader = () => {
  return (
    <h1>
      <Link to="/">
        <img src={process.env.PUBLIC_URL + "/images/logo_1x.png"} alt="Logo" />
      </Link>
    </h1>
  );
};

export default AccountHeader;
