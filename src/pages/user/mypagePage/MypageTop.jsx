import React from "react";
import "./MypageTop.scss";

const MypageTop = ({
  points = 100000,
  coupons = 20,
  wishlistCount = 33,
  orderStatus = "주문완료",
  currentOrders = 3,
}) => {
  return (
    <div className="my-page-top">
      <div className="my-page-top__item my-page-top__item--points">
        <span className="my-page-top__label">포인트</span>
        <span className="my-page-top__value">{points}</span>
      </div>
      <div className="my-page-top__item my-page-top__item--coupons">
        <span className="my-page-top__label">쿠폰</span>
        <span className="my-page-top__value">{coupons}</span>
      </div>
      <div className="my-page-top__item my-page-top__item--wishlist">
        <span className="my-page-top__label">찜</span>
        <span className="my-page-top__value">{wishlistCount}</span>
      </div>
      <div className="my-page-top__item my-page-top__item--order-status">
        <span className="my-page-top__label">주문상태</span>
        <span className="my-page-top__value">{orderStatus}</span>
      </div>
      <div className="my-page-top__item my-page-top__item--current-orders">
        <span className="my-page-top__label">진행 주문</span>
        <span className="my-page-top__value">{currentOrders}건</span>
      </div>
    </div>
  );
};

export default MypageTop;
