import React, { useState } from "react";
import { Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import useLogin from "../../hooks/useLogin";

const LoginPage2 = () => {
  const [username, setUsername] = useState("tkwkdsla1");
  const [password, setPassword] = useState("tkwkdsla1");
  const { login, loading, error } = useLogin();

  const handleLogin = e => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <div className="login">
      <form className="login__form" onSubmit={handleLogin}>
        <div className="login__form-group">
          <TextField
            label="아이디"
            value={username}
            onChange={e => setUsername(e.target.value)}
            sx={{ width: 500, maxWidth: "100%" }}
          />
          <TextField
            label="비밀번호"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            sx={{ width: 500, maxWidth: "100%" }}
          />
          <Button
            variant="contained"
            size="large"
            type="submit"
            disabled={loading}
          >
            {loading ? "로그인 중..." : "로그인"}
          </Button>
        </div>
        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
      <div className="login__links">
        <Link className="login__link" to="/signup">
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

export default LoginPage2;
