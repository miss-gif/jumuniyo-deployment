/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const RestaurantDetailTabInfo = ({ restaurantDetails }) => {
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
    <div className="restaurant-detail-tab-info">
      <div className="restaurant-detail-tab-info__wrap">
        <div className="restaurant-detail-tab-info__title">사장님알림</div>
        <div className="restaurant-detail-tab-info__content">
          {restaurantDesc}
        </div>
      </div>
      <div className="restaurant-detail-tab-info__wrap">
        <div className="restaurant-detail-tab-info__title">업체정보</div>
        <div className="restaurant-detail-tab-info__content">
          <div className="restaurant-detail-tab-info__info">
            <p className="restaurant-detail-tab-info__info-title">영업시간</p>
            <p className="restaurant-detail-tab-info__info-detail">
              {openTime} - {closeTime}
            </p>
          </div>
          <div className="restaurant-detail-tab-info__info">
            <p className="restaurant-detail-tab-info__info-title">전화번호</p>
            <p className="restaurant-detail-tab-info__info-detail">
              050352550768 (요기요 제공 번호)
            </p>
          </div>
          <div className="restaurant-detail-tab-info__info">
            <p className="restaurant-detail-tab-info__info-title">주소</p>
            <p className="restaurant-detail-tab-info__info-detail">
              {restaurantAddr}
            </p>
          </div>
          <div className="restaurant-detail-tab-info__info">
            <p className="restaurant-detail-tab-info__info-title">부가정보</p>
            <p className="restaurant-detail-tab-info__info-detail">
              세스코멤버스 사업장
            </p>
          </div>
        </div>
      </div>
      <div className="restaurant-detail-tab-info__wrap">
        <div className="restaurant-detail-tab-info__title">결제정보</div>
        <div className="restaurant-detail-tab-info__content">
          <div className="restaurant-detail-tab-info__info">
            <p className="restaurant-detail-tab-info__info-title">결제수단</p>
            <p className="restaurant-detail-tab-info__info-detail">
              신용카드, 현금, 요기서결제
            </p>
          </div>
        </div>
      </div>
      <div className="restaurant-detail-tab-info__wrap">
        <div className="restaurant-detail-tab-info__title">사업자정보</div>
        <div className="restaurant-detail-tab-info__content">
          <div className="restaurant-detail-tab-info__info">
            <p className="restaurant-detail-tab-info__info-title">상호명</p>
            <p className="restaurant-detail-tab-info__info-detail">
              주식회사우주소년
            </p>
          </div>
          <div className="restaurant-detail-tab-info__info">
            <p className="restaurant-detail-tab-info__info-title">
              사업자등록번호
            </p>
            <p className="restaurant-detail-tab-info__info-detail">{regiNum}</p>
          </div>
        </div>
      </div>
      <div className="restaurant-detail-tab-info__wrap">
        <div className="restaurant-detail-tab-info__title">원산지정보</div>
        <div className="restaurant-detail-tab-info__content">
          <p className="restaurant-detail-tab-info__info-detail">
            [스테이크] 목살 스테이크 샐러드(돼지고기:스페인산) 그릴드 치킨
            스테이크 샐러드(닭고기:브라질산)
          </p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailTabInfo;
