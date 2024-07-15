/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const RestaurantDetailInfo = ({ restaurantDetails }) => {
  const {
    restaurantName,
    restaurantDesc,
    reviewScore,
    reviewDesc,
    reviewTotalElements,
    restaurantAddr,
    regiNum,
    openTime,
    closeTime,
    restaurantPic,
    restaurantState,
    menuList,
  } = restaurantDetails;

  return (
    <div className="restaurant-detail-page__info">
      <h2 className="restaurant-detail-page__info-name">{restaurantName}</h2>
      <div className="restaurant-detail-page__info-content">
        <div className="restaurant-detail-page__info-image">
          <img src={restaurantPic} alt={restaurantPic} />
        </div>
        <div className="restaurant-detail-page__info-details">
          <div className="restaurant-detail-page__info-rating">
            <span>★★★★★</span> <p>{reviewScore}</p>
          </div>
          <p className="restaurant-detail-page__info-payment">
            <span className="gray">결제</span> 신용카드 , 현금 , 웹 결제
          </p>
        </div>
      </div>
      <p className="restaurant-detail-page__info-notice">
        <span>사장님알림</span> {restaurantDesc}
      </p>
    </div>
  );
};

export default RestaurantDetailInfo;
