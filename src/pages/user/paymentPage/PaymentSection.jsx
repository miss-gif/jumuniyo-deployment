import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux"; // Redux에서 상태를 가져오기 위해 추가
import PaymentSelect from "../../../components/common/PaymentSelect";

const PaymentSection = () => {
  const [address, setAddress] = useState("");
  const [localPhone, setLocalPhone] = useState(""); // 로컬 상태 추가

  // Redux에서 전화번호 값 가져오기
  const phone = useSelector(state => state.user.profile.userPhone);

  useEffect(() => {
    // Redux에서 전화번호를 로컬 상태에 초기화
    setLocalPhone(phone);

    const locationData = localStorage.getItem("locationData");
    if (locationData) {
      const parsedLocationData = JSON.parse(locationData);
      if (parsedLocationData.address) {
        setAddress(parsedLocationData.address);
      }
    }
  }, [phone]); // phone이 변경될 때마다 로컬 상태를 업데이트

  // 전화번호 입력 변화 핸들러
  const handlePhoneChange = e => {
    setLocalPhone(e.target.value); // 로컬 상태 업데이트
  };

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
                <label htmlFor="detail-address"></label>
                <input
                  type="text"
                  id="detail-address"
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
                  value={localPhone} // 로컬 상태 사용
                  onChange={handlePhoneChange} // onChange 핸들러 추가
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
