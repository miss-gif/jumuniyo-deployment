import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="login">
      <h2 className="login__title">로그인</h2>
      <form className="login__form">
        <div className="login__form-group">
          <label className="login__label" htmlFor="username">
            아이디
          </label>
          <input
            className="login__input"
            type="text"
            id="username"
            name="username"
          />
        </div>
        <div className="login__form-group">
          <label className="login__label" htmlFor="password">
            비밀번호
          </label>
          <input
            className="login__input"
            type="password"
            id="password"
            name="password"
          />
        </div>
        <div className="login__form-group login__form-group--remember">
          <input
            className="login__checkbox"
            type="checkbox"
            id="remember"
            name="remember"
          />
          <label
            className="login__label login__label--checkbox"
            htmlFor="remember"
          >
            아이디 기억하기
          </label>
        </div>
        <button className="login__button" type="submit">
          로그인
        </button>
      </form>
      <div className="login__links">
        <Link className="login__link" to="/auth">
          회원가입
        </Link>
        <a className="login__link" href="/forgot-id">
          아이디 찾기
        </a>
        <a className="login__link" href="/forgot-password">
          비밀번호 찾기
        </a>
      </div>
      <div className="login__social">
        <button className="login__social-button login__social-button--naver">
          네이버
        </button>
        <button className="login__social-button login__social-button--google">
          구글
        </button>
        <button className="login__social-button login__social-button--kakao">
          카카오
        </button>
      </div>
    </div>
  );
};

export default Login;
