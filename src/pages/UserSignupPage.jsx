import React, { useState } from "react";

const UserSignupPage = () => {
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
    <div className="signup">
      <h1 className="signup__title">사용자 회원가입</h1>
      <form className="signup__form">
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="username">
            아이디
          </label>
          <input
            className="signup__input"
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="password">
            비밀번호
          </label>
          <input
            className="signup__input"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="confirm-password">
            비밀번호 확인
          </label>
          <input
            className="signup__input"
            type="password"
            id="confirm-password"
            name="confirm-password"
          />
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="email">
            이메일
          </label>
          <input
            className="signup__input"
            type="email"
            id="email"
            name="email"
          />
          <button className="signup__email-button" type="button">
            전송
          </button>
        </div>
        <div className="signup__form-group">
          <label className="signup__label" htmlFor="email-code">
            코드 입력
          </label>
          <input
            className="signup__input"
            type="text"
            id="email-code"
            name="email-code"
          />
          <button className="signup__code-button" type="button">
            확인
          </button>
        </div>
        <div className="signup__terms">
          <div className="signup__terms-group">
            <input
              className="signup__checkbox"
              type="checkbox"
              id="all-terms"
              name="all-terms"
              checked={allChecked}
              onChange={handleAllCheck}
            />
            <label
              className="signup__label signup__label--checkbox"
              htmlFor="all-terms"
            >
              전체 동의
            </label>
          </div>
          <div className="signup__terms-group">
            <input
              className="signup__checkbox"
              type="checkbox"
              id="privacy"
              name="privacy"
              checked={privacyChecked}
              onChange={handlePrivacyCheck}
            />
            <label
              className="signup__label signup__label--checkbox"
              htmlFor="privacy"
            >
              개인정보 수집 및 이용 동의 (필수)
            </label>
          </div>
        </div>
        <button className="signup__button" type="submit">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default UserSignupPage;
