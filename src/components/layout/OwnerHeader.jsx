import React from "react";
import { Logo } from "../common/Logo";

const OwnerHeader = () => {
  return (
    <header className="owner-header">
      <div className="owner-header__left">
        <h1>
          <Logo />
        </h1>
      </div>
      <div className="owner-header__right">
        <div className="owner-header__user">
          <em>id</em>님
        </div>
        <div className="owner-header__item">내정보</div>
        <div className="owner-header__item">알림</div>
        <div className="owner-header__item">로그아웃</div>
      </div>
    </header>
  );
};

export default OwnerHeader;
