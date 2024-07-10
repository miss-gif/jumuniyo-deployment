import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";

const NavButton = ({ path, currentPath, label }) => {
  const navigate = useNavigate();

  const buttonStyle = {
    backgroundColor: currentPath === path ? "#333" : "white",
    color: currentPath === path ? "white" : "#333",
  };

  return (
    <button onClick={() => navigate(path)} style={buttonStyle}>
      {label}
    </button>
  );
};

NavButton.propTypes = {
  path: PropTypes.string.isRequired,
  currentPath: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
};

const MypageHeader = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/mypage", label: "계정관리" },
    { path: "/mypage/address", label: "주소관리" },
    { path: "/mypage/order", label: "주문내역" },
    { path: "/mypage/review", label: "리뷰관리" },
  ];

  return (
    <div className="mypage-header">
      <div className="mypage-header-list">
        {navItems.map(({ path, label }) => (
          <NavButton
            key={path}
            path={path}
            currentPath={currentPath}
            label={label}
          />
        ))}
      </div>
    </div>
  );
};

export default MypageHeader;