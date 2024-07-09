import { Route, Routes } from "react-router-dom";
import MenuManagement from "./components/ceo/MenuManagement";
import Orders from "./components/ceo/Orders";
import Reviews from "./components/ceo/Reviews";
import Statistics from "./components/ceo/Statistics";
import StoreManagement from "./components/ceo/StoreManagement";
import AdminLayout from "./components/layout/AdminLayout";
import CeoLayout from "./components/layout/CeoLayout";
import RootLayout from "./components/layout/RootLayout";
import AdminPage from "./pages/AdminPage";
import AuthCeoPage from "./pages/AuthCeoPage.jsx";
import CeoPage from "./pages/CeoPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import MyPage from "./pages/MyPage.jsx";
import MyPageAddress from "./pages/MyPageAddress";
import MyPageOrderListPage from "./pages/MyPageOrderListPage.jsx";
import MyPageOrderPage from "./pages/MyPageOrderPage.jsx";
import MyPageReviewPage from "./pages/MyPageReviewPage";
import MypageUserWithdrawal from "./pages/MypageUserWithdrawal";
import NotFound from "./pages/NotFound.jsx";
import PaymentPage from "./pages/PaymentPage.jsx";
import ProjectInfo from "./pages/ProjectInfo.jsx";
import RestaurantsPage from "./pages/RestaurantsPage.jsx";
import Test from "./pages/Test";

import RestaurantDetailPage from "./pages/RestaurantDetailPage";

import MyPageLayout from "./components/layout/MyPageLayout";
import SignupChoice from "./pages/SignupChoice";
import AccountLayout from "./components/layout/AccountLayout";
import UserSignupPage from "./pages/UserSignupPage.jsx";

// 사업자

function App() {
  return (
    <>
      <div className="root-wrap">
        <Routes>
          <Route path="/" element={<AccountLayout />}>
            {/* 로그인 */}
            <Route path="/login" element={<LoginPage />} />
            {/* 회원가입 */}
            <Route path="/auth" element={<SignupChoice />} />
            <Route path="/auth/user" element={<UserSignupPage />} />
            <Route path="/auth/ceo" element={<AuthCeoPage />} />
          </Route>

          {/* 유저 */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/restaurants/re" element={<RestaurantDetailPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/projectinfo" element={<ProjectInfo />} />
            <Route path="/orderview" element={<MyPageOrderPage />} />
            {/* 마이페이지 */}
            <Route path="/" element={<MyPageLayout />}>
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/order" element={<MyPageOrderListPage />} />
              <Route path="/mypage/order/:id" element={<MyPageOrderPage />} />
              <Route path="/mypage/review" element={<MyPageReviewPage />} />
              <Route path="/mypage/address" element={<MyPageAddress />} />
              <Route
                path="/mypage/withdrawal"
                element={<MypageUserWithdrawal />}
              />
            </Route>
          </Route>

          {/* 사업자 라우터 */}
          <Route path="/ceopage" element={<CeoLayout />}>
            <Route path="/ceopage/" element={<CeoPage />} />
            <Route path="orders" element={<Orders />} />
            <Route path="menu-management" element={<MenuManagement />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="store-management" element={<StoreManagement />} />
            <Route path="statistics" element={<Statistics />} />
          </Route>

          {/* 관리자 라우터 */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="/admin/" element={<AdminPage />} />
          </Route>

          {/* 공통 */}
          <Route path="*" element={<NotFound />} />
          <Route path="/test" element={<Test />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
