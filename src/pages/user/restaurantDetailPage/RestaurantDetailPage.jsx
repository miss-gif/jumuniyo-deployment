/* eslint-disable @typescript-eslint/no-unused-vars */
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
  const [orderItems, setOrderItems] = useState([]);

  // 주문표 기능
  const addToOrder = item => {
    setOrderItems(prevItems => {
      const existingItem = prevItems.find(
        orderItem => orderItem.name === item.name,
      );
      if (existingItem) {
        return prevItems.map(orderItem =>
          orderItem.name === item.name
            ? { ...orderItem, quantity: orderItem.quantity + 1 }
            : orderItem,
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };
  // 주문표 기능
  const updateQuantity = (itemName, quantity) => {
    setOrderItems(prevItems =>
      prevItems.map(item =>
        item.name === itemName ? { ...item, quantity } : item,
      ),
    );
  };

  const renderContent = () => {
    switch (activeTab) {
      case "menu":
        return (
          <RestaurantDetailMenuContent
            addToOrder={addToOrder}
            restaurantDetails={restaurantDetails}
          />
        );
      case "review":
        return <RestaurantDetailCleanReview />;
      case "info":
        return (
          <RestaurantDetailTabInfo restaurantDetails={restaurantDetails} />
        );
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
        <RestaurantDetailInfo restaurantDetails={restaurantDetails} />
        <div className="restaurant-detail-page__menu">
          <RestaurantDetailHeader
            setActiveTab={setActiveTab}
            restaurantDetails={restaurantDetails}
          />
          <div>{renderContent()}</div>
        </div>
      </div>
      <div className="restaurant-detail-page__right">
        <OrderSummary orderItems={orderItems} updateQuantity={updateQuantity} />
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
