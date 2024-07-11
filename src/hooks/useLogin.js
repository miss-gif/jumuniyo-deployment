import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/user";
import { Cookies } from "react-cookie";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginUser(username, password);
      if (response.statusCode === 1) {
        Cookies.set("accessToken", response.resultData.accessToken);
        navigate("/");
        console.log("로그인 성공");
        setError(null); // Clear any previous error
        setLoading(false); // Ensure loading is set to false before navigation
        return; // Ensure no further code is executed
      } else {
        console.log("로그인 실패:", response.resultMsg);
        setError(response.resultMsg);
      }
    } catch (error) {
      setError("로그인에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
