import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./SideNav.scss";

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
    { path: "/test2", label: "홈" },
    { path: "/owner/menus", label: "메뉴관리" },
    { path: "/owner/order-history", label: "주문관리" },
    { path: "/owner/orders", label: "주문내역" },
    { path: "/owner/reviews", label: "리뷰관리" },
    { path: "/owner/stores", label: "매장관리" },
    { path: "/owner/dashboard", label: "통계" },
  ];

  const UID_Data = {
    name: "string",
    rank: "실버",
  };

  const state = "영업중";

  return (
    <div className="side-nav">
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
