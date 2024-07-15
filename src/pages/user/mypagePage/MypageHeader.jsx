import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Logo } from "../../../components/common/Logo";
import styled from "@emotion/styled";

const SideNavItemStyle = ({ path, label, currentPath }) => {
  const navigate = useNavigate();

  return (
    <li
      className={`side-nav__item ${
        currentPath === path ? "side-nav__item--active" : ""
      }`}
      onClick={() => navigate(path)}
    >
      {label}
    </li>
  );
};

const SideNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const sideNavItem = [
    { path: "/mypage", label: "홈" },
    { path: "/mypage/profile", label: "내프로필" },
    { path: "/mypage/orderlist", label: "주문내역" },
    { path: "/mypage/reviewlist", label: "리뷰관리" },
    { path: "/mypage/addrlist", label: "배송지 관리" },
    { path: "/mypage/cardlist", label: "카드관리" },
    { path: "/mypage/inquirylist", label: "문의내역" },
    { path: "/mypage/help", label: "고객센터" },
  ];

  const UID_Data = {
    name: "아이디",
    rank: "실버",
  };

  const state = "구독패스 ON";

  return (
    <div className="side-nav">
      <LogoStyle className="side-nav__logo">
        <Logo />
      </LogoStyle>
      <div className="side-nav__profile">
        <img src="https://picsum.photos/100/" alt="프로필 이미지" />
        <div className="side-nav__uid-data">
          <p>{UID_Data.name}</p>
          <span>{UID_Data.rank}</span>
        </div>
        <div className="side-nav__search">
          <div className="side-nav__search__status">{state}</div>
        </div>
      </div>
      <div className="side-nav__wrap">
        <ul className="side-nav__list">
          {sideNavItem.map(({ path, label }) => (
            <SideNavItemStyle
              key={path}
              path={path}
              currentPath={currentPath}
              label={label}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SideNav;

const LogoStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90px;
`;
