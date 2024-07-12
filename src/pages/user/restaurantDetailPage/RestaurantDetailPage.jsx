import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RestaurantDetailMenuContent from "./RestaurantDetailMenuContent";
import RestaurantDetailCleanReview from "./RestaurantDetailCleanReview";
import RestaurantDetailTabInfo from "./RestaurantDetailTabInfo";
import RestaurantDetailInfo from "./RestaurantDetailInfo";
import RestaurantDetailHeader from "./RestaurantDetailHeader";
import OrderSummary from "./OrderSummary";
import useRestaurantDetails from "../../../hooks/useRestaurantDetails";

const RestaurantDetailPage = () => {
  const { id } = useParams();
  const { restaurantDetails, loading, error } = useRestaurantDetails(id);
  const [activeTab, setActiveTab] = useState("menu");

  useEffect(() => {
    console.log("id", id);
  }, []);

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

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error loading restaurant details.</div>;
  }

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
