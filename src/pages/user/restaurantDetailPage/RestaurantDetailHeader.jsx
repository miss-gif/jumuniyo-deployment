/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/prop-types */
import React from "react";

const RestaurantDetailHeader = ({ setActiveTab, restaurantDetails }) => {
  const {
    reviewTotalElements,

    menuList,
  } = restaurantDetails;

  const menuCount = restaurantDetails.menuList.length;

  return (
    <ul className="restaurant-detail-page__menu-header">
      <li
        className="header__item header__menu"
        onClick={() => setActiveTab("menu")}
      >
        메뉴 <span>{menuCount}</span>
      </li>
      <li
        className="header__item header__review"
        onClick={() => setActiveTab("review")}
      >
        클린리뷰 <span>{reviewTotalElements}</span>
      </li>
      <li
        className="header__item header__info"
        onClick={() => setActiveTab("info")}
      >
        정보
      </li>
    </ul>
  );
};

export default RestaurantDetailHeader;
