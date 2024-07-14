import React from "react";
import PropTypes from "prop-types";
import { useNavigate, useLocation } from "react-router-dom";
import "./MypageHeader.scss";
import { Logo } from "../../../components/common/Logo";

const NavButton = ({ path, label, currentPath }) => {
  const navigate = useNavigate();

  return (
    <li
      className={`mypage-header__item ${
        currentPath === path ? "mypage-header__item--active" : ""
      }`}
      onClick={() => navigate(path)}
    >
      {label}
    </li>
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
    { path: "/mypage", label: "홈" },
    { path: "/mypage/profile", label: "내프로필" },
    { path: "/mypage/orderlist", label: "주문내역" },
    { path: "/mypage/reviewlist", label: "리뷰관리" },
    { path: "/mypage/addrlist", label: "배송지 관리" },
    { path: "/mypage/cardlist", label: "카드관리" },
    { path: "/mypage/inquirylist", label: "문의내역" },
    { path: "/mypage/help", label: "고객센터" },
  ];

  return (
    <div className="mypage-header">
      <div className="mypage-header__logo">
        <Logo />
      </div>
      <div className="mypage-header__wrap">
        <div className="mypage-header__profile">
          <img src="https://picsum.photos/100/" alt="프로필 이미지" />
          <p>1561</p>
          <span>골드 등급</span>
        </div>
        <div className="mypage-header__search">
          <div className="mypage-header__search__status">구독중</div>
        </div>
        <div className="mypage-header__wrap-list">
          <div className="mypage-header__list">
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
      </div>
    </div>
  );
};

export default MypageHeader;
