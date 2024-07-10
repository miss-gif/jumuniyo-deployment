import React, { useState } from "react";

const OwnerSignupPage = () => {
  const [allChecked, setAllChecked] = useState(false);
  const [privacyChecked, setPrivacyChecked] = useState(false);

  const handleAllCheck = e => {
    const { checked } = e.target;
    setAllChecked(checked);
    setPrivacyChecked(checked);
  };

  const handlePrivacyCheck = e => {
    const { checked } = e.target;
    setPrivacyChecked(checked);
    if (!checked) {
      setAllChecked(false);
    }
  };

  return (
    <div className="signup-owner">
      <h1 className="signup-owner__title">사업자 회원가입</h1>
      <form className="signup-owner__form">
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="username">
            아이디 (이메일 주소)
          </label>
          <input
            className="signup-owner__input"
            type="email"
            id="username"
            name="username"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="password">
            비밀번호
          </label>
          <input
            className="signup-owner__input"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="business-number">
            사업자 등록 번호
          </label>
          <input
            className="signup-owner__input"
            type="text"
            id="business-number"
            name="business-number"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="business-name">
            상호명
          </label>
          <input
            className="signup-owner__input"
            type="text"
            id="business-name"
            name="business-name"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="representative-name">
            대표자명
          </label>
          <input
            className="signup-owner__input"
            type="text"
            id="representative-name"
            name="representative-name"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="business-address">
            사업장 주소
          </label>
          <input
            className="signup-owner__input"
            type="text"
            id="business-address"
            name="business-address"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="business-phone">
            사업장 전화번호
          </label>
          <input
            className="signup-owner__input"
            type="text"
            id="business-phone"
            name="business-phone"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="business-type">
            업종
          </label>
          <input
            className="signup-owner__input"
            type="text"
            id="business-type"
            name="business-type"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="business-hours">
            영업 시간
          </label>
          <input
            className="signup-owner__input"
            type="text"
            id="business-hours"
            name="business-hours"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="delivery-area">
            배달 가능 지역
          </label>
          <input
            className="signup-owner__input"
            type="text"
            id="delivery-area"
            name="delivery-area"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="payment-info">
            결제 정보
          </label>
          <input
            className="signup-owner__input"
            type="text"
            id="payment-info"
            name="payment-info"
          />
        </div>
        <div className="signup-owner__form-group">
          <label className="signup-owner__label" htmlFor="menu-info">
            메뉴 정보
          </label>
          <textarea
            className="signup-owner__textarea"
            id="menu-info"
            name="menu-info"
          ></textarea>
        </div>
        <div className="signup-owner__terms">
          <div className="signup-owner__terms-group">
            <input
              className="signup-owner__checkbox"
              type="checkbox"
              id="all-terms"
              name="all-terms"
              checked={allChecked}
              onChange={handleAllCheck}
            />
            <label
              className="signup-owner__label signup-owner__label--checkbox"
              htmlFor="all-terms"
            >
              전체 동의
            </label>
          </div>
          <div className="signup-owner__terms-group">
            <input
              className="signup-owner__checkbox"
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={privacyChecked}
              onChange={handlePrivacyCheck}
            />
            <label
              className="signup-owner__label signup-owner__label--checkbox"
              htmlFor="privacy"
            >
              개인정보 수집 및 이용 동의 (필수)
            </label>
          </div>
        </div>
        <button className="signup-owner__button" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default OwnerSignupPage;
