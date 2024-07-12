import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const NavButton = ({ path, label, currentPath }) => {
  const navigate = useNavigate();

  return (
    <button
      className={`owner-nav__button ${
        currentPath === path ? "owner-nav__button--active" : ""
      }`}
      onClick={() => navigate(path)}
    >
      {label}
    </button>
  );
};

const OwnerNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { path: "/owner", label: "홈" },
    { path: "/owner/menus", label: "메뉴관리" },
    { path: "/owner/order-history", label: "주문관리" },
    { path: "/owner/orders", label: "주문내역" },
    { path: "/owner/reviews", label: "리뷰관리" },
    { path: "/owner/stores", label: "매장관리" },
    { path: "/owner/dashboard", label: "통계" },
  ];

  return (
    <div className="owner-nav">
      <div className="owner-nav__profile">
        <img src="https://picsum.photos/100/" alt="프로필 이미지" />
        <p>닉네임</p>
        <span>통합 매니저</span>
      </div>
      <div className="owner-nav__search">
        <div className="owner-nav__status">영업중</div>
        <input
          className="owner-nav__input"
          type="text"
          placeholder="입력 후 검색하세요"
        />
      </div>
      <div className="owner-nav__list">
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

export default OwnerNav;
