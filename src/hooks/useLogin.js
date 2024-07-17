/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useCookies } from "react-cookie";
import { loginUser } from "../api/user";
import { setTokens } from "../features/auth/authSlice";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [cookies, setCookie] = useCookies(["accessToken", "refreshToken"]);

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginUser(username, password);
      console.log("로그인 응답:", response); // 응답 로그 출력
      if (response.statusCode === 2) {
        const { accessToken, refreshToken } = response.resultData;
        setCookie("accessToken", accessToken, { path: "/" });
        setCookie("refresh-token", refreshToken, { path: "/" });
        dispatch(setTokens({ accessToken, refreshToken }));
        setLoading(false); // 상태 업데이트
        navigate("/"); // 페이지 이동
        console.log("로그인 성공");
      } else {
        console.log("로그인 실패:", response.resultMsg);
        setError(response.resultMsg);
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error); // 에러 로그 출력
      setError("로그인에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
