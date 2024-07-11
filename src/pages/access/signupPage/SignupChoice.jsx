import React from "react";

const SignupChoice = () => {
  return (
    <div className="signup-choice">
      <div className="signup-choice__text">
        <h2 className="signup-choice__title">회원가입 유형 선택</h2>
        <p className="signup-choice__description">
          배달 플랫폼에 가입하여 서비스를 이용하세요. <br />
          아래에서 회원가입 유형을 선택해 주세요.
        </p>
      </div>
      <div className="signup-choice__options">
        <div className="signup-choice__option">
          <h2 className="signup-choice__option-title">사용자 회원가입</h2>
          <p className="signup-choice__option-description">
            배달 음식을 주문하고 다양한 혜택을 받아보세요.
          </p>
          <a className="signup-choice__button" href="/signup/user">
            사용자 회원가입
          </a>
        </div>
        <div className="signup-choice__option">
          <h2 className="signup-choice__option-title">사업자 회원가입</h2>
          <p className="signup-choice__option-description">
            당신의 가게를 등록하고 배달 주문을 받아보세요.
          </p>
          <a className="signup-choice__button" href="/signup/owner">
            사업자 회원가입
          </a>
        </div>
      </div>
    </div>
  );
};

export default SignupChoice;
