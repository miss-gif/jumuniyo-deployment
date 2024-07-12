### 문제해결 과정

#### 로그인에 성공하면 `navigate("/")`로 이동하는 코드가 작동하지 않음.

- 원인 : react-cookie의 최신 버전에서는 Cookies 객체가 set 메서드를 지원하지 않음.

```js
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
        setLoading(false); // 상태 업데이트
        navigate("/"); // 페이지 이동
        console.log("로그인 성공");
      } else {
        console.log("로그인 실패:", response.resultMsg);
        setError(response.resultMsg);
      }
    } catch (error) {
      console.error("로그인 중 오류 발생:", error);
      setError("로그인에 실패했습니다. 다시 시도해주세요.");
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
};

export default useLogin;
```

- 해결방법 : 그래서 useCookies 훅을 사용해야 합니다.

```js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../api/user";
import { useCookies } from "react-cookie"; // useCookies 훅 사용

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [cookies, setCookie] = useCookies(["accessToken"]); // useCookies 훅 사용

  const login = async (username, password) => {
    setLoading(true);
    setError(null);
    try {
      const response = await loginUser(username, password);
      console.log("로그인 응답:", response); // 응답 로그 출력
      if (response.statusCode === 1) {
        setCookie("accessToken", response.resultData.accessToken, {
          path: "/",
        }); // 쿠키 설정
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
```

#### 로그아웃 버튼을 누르면 쿠키에 저장된 토큰이 삭제되어야 함. (refresh-token이 삭제되지 않음) - 미해결

```js
const handleLogout = () => {
  // 쿠키 삭제
  removeCookie("accessToken", { path: "/" });
  removeCookie("refreshToken", { path: "/" });
  removeCookie("refresh-token", { path: "/" });

  // Redux 상태 초기화
  dispatch(clearTokens());

  // 로그아웃 후 리디렉션
  navigate("/login");
};
```

#### 로그인 상태에서 새로고침 시 로그인 상태를 유지하지 않는 문제

- 원인 : 로그인 상태를 브라우저 새로 고침 시 유지하지 않기 때문에 발생합니다.

```js
const initialState = {
  accessToken: null,
  refreshToken: null,
  isLoggedIn: false, // 로그인 상태 추가
};
```

- 해결방법 : 이 문제를 해결하려면 브라우저 새로 고침 시 쿠키를 확인하여 로그인 상태를 복원하는 로직이 필요합니다.

```js
import { Cookies } from "react-cookie";

const cookies = new Cookies();

const initialState = {
  accessToken: cookies.get("accessToken") || null,
  refreshToken: cookies.get("refresh-token") || null,
  isLoggedIn: !!cookies.get("accessToken"), // 쿠키에 accessToken이 있으면 로그인 상태로 설정
};
```
