import React, { useState } from "react";
import RestaurantDetailMenuContent from "./RestaurantDetailMenuContent";
import RestaurantDetailCleanReview from "./RestaurantDetailCleanReview";
import RestaurantDetailTabInfo from "./RestaurantDetailTabInfo";
import RestaurantDetailInfo from "./RestaurantDetailInfo";
import RestaurantDetailHeader from "./RestaurantDetailHeader";
import OrderSummary from "./OrderSummary";

const RestaurantDetailPage = () => {
  const [activeTab, setActiveTab] = useState("menu");

  const renderContent = () => {
    switch (activeTab) {
      case "menu":
        return <RestaurantDetailMenuContent />;
      case "review":
        return <RestaurantDetailCleanReview />;
      case "info":
        return <RestaurantDetailTabInfo />;
      default:
        return null;
    }
  };

  return (
    <div className="restaurant-detail-page">
      <div className="restaurant-detail-page__left">
        <RestaurantDetailInfo />

        <div className="restaurant-detail-page__menu">
          <RestaurantDetailHeader setActiveTab={setActiveTab} />
          <div>{renderContent()}</div>
        </div>
      </div>

      <div className="restaurant-detail-page__right">
        <OrderSummary />
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
