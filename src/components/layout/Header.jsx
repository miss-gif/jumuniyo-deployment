import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import MenuIcon from "@mui/icons-material/Menu";
import PersonIcon from "@mui/icons-material/Person";
import Logo from "../common/Logo";
import { clearTokens } from "../../features/auth/authSlice"; // 로그아웃 액션 가져오기

function Header() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(clearTokens());
    // 로그아웃 후 추가적인 작업이 필요하다면 여기에 추가
  };

  return (
    <header className="header">
      <div className="inner">
        <h1>
          <Logo />
        </h1>
        <nav className="nav">
          <ul className="nav__top">
            <li>
              <Link to="/ceopage">주문이요사장님</Link>
            </li>
            <li>
              <Link to="/admin">관리자</Link>
            </li>
          </ul>
          <ul className="nav__list">
            <li className="nav__item">
              <Link to="/restaurants">주문하기</Link>
            </li>
            <li className="nav__item">
              <Link to="/restaurants/re">음식점 상세</Link>
            </li>
            <li className="nav__item">
              <Link to="/payment">결제하기</Link>
            </li>
            <li className="nav__item">
              <Link to="/orderview">주문확인</Link>
            </li>
            <li className="nav__item">
              <Link to="/mypage">마이페이지</Link>
            </li>
            {isLoggedIn ? (
              <li className="nav__item nav__item--logout btn">
                <button onClick={handleLogout}>로그아웃</button>
              </li>
            ) : (
              <>
                <li className="nav__item nav__item--login">
                  <Link to="/login">로그인</Link>
                </li>
                <li className="nav__item nav__item--auth btn">
                  <Link to="/signup">회원가입</Link>
                </li>
              </>
            )}
          </ul>
        </nav>
        <nav className="header-mobile">
          <ul>
            <li>
              <PersonIcon sx={{ fontSize: 32 }} />
            </li>
            <li>
              <LocationOnIcon sx={{ fontSize: 32 }} />
            </li>
            <li className="header-mobile__alarm none">
              <NotificationsActiveIcon sx={{ fontSize: 32 }} />
            </li>
            <li>
              <MenuIcon sx={{ fontSize: 42 }} />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
