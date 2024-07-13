import React from "react";
import RestaurantDetailCarousel from "./RestaurantDetailCarousel";
import MenuCategory from "./MenuCategory";

const RestaurantDetailMenuContent = ({ addToOrder }) => {
  return (
    <div className="restaurant-detail-page__menu-content">
      <div className="carousel">
        <RestaurantDetailCarousel />
      </div>
      <MenuCategory addToOrder={addToOrder} title="인기메뉴" />
    </div>
  );
};

export default RestaurantDetailMenuContent;
