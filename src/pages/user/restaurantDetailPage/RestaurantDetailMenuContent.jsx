import React from "react";
import RestaurantDetailCarousel from "./RestaurantDetailCarousel";
import MenuCategory from "./MenuCategory";

const RestaurantDetailMenuContent = ({ addToOrder, restaurantDetails }) => {
  return (
    <div className="restaurant-detail-page__menu-content">
      <div className="carousel none">
        <RestaurantDetailCarousel />
      </div>
      <MenuCategory
        addToOrder={addToOrder}
        restaurantDetails={restaurantDetails}
        title="인기메뉴"
      />
    </div>
  );
};

export default RestaurantDetailMenuContent;
