import { Button, TextField } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login">
      <form className="login__form">
        <div className="login__form-group">
          <TextField
            id="outlined-basic"
            label="아이디"
            variant="outlined"
            sx={{ width: 500, maxWidth: "100%" }}
          />
          <TextField
            id="outlined-basic"
            label="비밀번호"
            variant="outlined"
            sx={{ width: 500, maxWidth: "100%" }}
          />
          <Button variant="contained" size="large">
            로그인
          </Button>
        </div>
      </form>
      <div className="login__links">
        <Link className="login__link" to="/auth">
          회원가입
        </Link>
        <Link className="login__link" to="/forgot-id">
          아이디 찾기
        </Link>
        <Link className="login__link" to="/forgot-password">
          비밀번호 찾기
        </Link>
      </div>
      <ul className="login__social">
        <li className="login__social-button login__social-button--logo">
          <img
            src={process.env.PUBLIC_URL + "/images/logo_1x.png"}
            alt="Logo"
          />
        </li>
        <li className="login__social-button login__social-button--naver">
          <img
            src={process.env.PUBLIC_URL + "/images/logo_naver.svg"}
            alt="Logo"
          />
        </li>
        <li className="login__social-button login__social-button--google">
          <img
            src={process.env.PUBLIC_URL + "/images/logo_google.png"}
            alt="Logo"
          />
        </li>
        <li className="login__social-button login__social-button--kakao">
          카카오
        </li>
      </ul>
    </div>
  );
};

export default LoginPage;
