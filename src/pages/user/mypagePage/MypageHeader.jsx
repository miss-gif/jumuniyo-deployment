import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import "./MypageHeader.scss";
import { Logo } from "../../../components/common/Logo";

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
    { path: "/mypage", label: "마이페이지" },
    { path: "/mypage/orderlist", label: "주문내역" },
    { path: "/mypage/reviewlist", label: "리뷰관리" },
    { path: "/mypage/addrlist", label: "주소관리" },
    { path: "/mypage/cardlist", label: "카드관리" },
    { path: "/mypage/inquirylist", label: "문의내역" },
    { path: "/mypage/help", label: "고객센터" },
  ];

  return (
    <div className="mypage-header">
      <div className="mypage-header__logo">
        <Logo />
      </div>
      <div className="mypage-header__profile">
        <img src="https://picsum.photos/100/" alt="프로필 이미지" />
        <p>닉네임</p>
        <span>통합 매니저</span>
      </div>
      <div className="mypage-header__search">
        <div className="mypage-header__search__status">영업중</div>
      </div>
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
