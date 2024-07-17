import React, { useState, useEffect } from "react";
import PaymentSelect from "../../../components/common/PaymentSelect";

const PaymentSection = () => {
  const [address, setAddress] = useState("");

  useEffect(() => {
    const locationData = localStorage.getItem("locationData");
    if (locationData) {
      const parsedLocationData = JSON.parse(locationData);
      if (parsedLocationData.address) {
        setAddress(parsedLocationData.address);
      }
    }
  }, []); // 빈 배열을 두 번째 인자로 주어 컴포넌트가 마운트될 때만 useEffect가 실행되도록 합니다.

  return (
    <div className="payment-page__section">
      <h2 className="payment-page__title">결제하기</h2>
      <div className="payment-page__warp-border">
        <form className="payment-page__form">
          <div className="payment-page__input-wrap">
            <h3 className="payment-page__subtitle">배달정보</h3>
            <div className="payment-page__delivery-info">
              <div>
                <label htmlFor="address">주소</label>
                <input
                  type="text"
                  id="address"
                  className="payment-page__input"
                  value={address}
                  readOnly
                />
              </div>
              <div>
                <label htmlFor="address"></label>
                <input
                  type="text"
                  id="address"
                  className="payment-page__input"
                  placeholder="(필수) 상세주소 입력"
                />
              </div>
              <div>
                <label htmlFor="phone">휴대전화번호</label>
                <input
                  type="text"
                  id="phone"
                  className="payment-page__input"
                  placeholder="(필수) 휴대전화 번호 입력"
                />
              </div>
            </div>
          </div>
          <div className="payment-page__input-wrap">
            <h3 className="payment-page__subtitle">주문시 요청사항</h3>
            <div className="payment-page__request">
              <textarea
                name="request"
                id="request"
                placeholder="요청사항을 남겨주세요."
                className="payment-page__textarea"
              ></textarea>
            </div>
          </div>
          <PaymentSelect />
          <div className="payment-page__input-wrap none">
            <h3 className="payment-page__subtitle">할인방법 선택</h3>
            <div className="payment-page__coupon ">
              <label htmlFor="coupon">쿠폰</label>
              <div className="payment-page__coupon-wrap">
                <input
                  type="text"
                  id="coupon"
                  className="payment-page__input"
                />
                <button className="payment-page__coupon-btn btn--default">
                  적용
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PaymentSection;
