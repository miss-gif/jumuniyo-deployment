import React from "react";
import { Link } from "react-router-dom";

const AccessHeader = () => {
  return (
    <div className="access-header">
      <h1>
        <Link to="/">
          <img
            src={process.env.PUBLIC_URL + "/images/logo_1x.png"}
            alt="Logo"
          />
        </Link>
      </h1>
      <a href="login2" className="access-header-title">
        사장님
      </a>
      <a href="login3" className="access-header-title">
        관리자
      </a>
    </div>
  );
};

export default AccessHeader;
