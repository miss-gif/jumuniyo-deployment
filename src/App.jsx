import { Route, Routes } from "react-router-dom";

import NotFound from "./components/common/NotFound";
import ProjectInfo from "./components/common/ProjectInfo";

import AccountLayout from "./components/layout/AccessLayout";
import AdminLayout from "./components/layout/AdminLayout";
import RootLayout from "./components/layout/RootLayout";

import LoginPage from "./pages/access/LoginPage";
import SignupChoice from "./pages/access/signupPage/SignupChoice";
import UserSignupPage from "./pages/access/signupPage/UserSignupPage";

import AdminPage from "./pages/admin/adminPage/AdminPage";

import MyPageOrderListPage from "./pages/user/mypagePage/MyPageOrderListPage";

import Test from "./pages/Test";

import HomePage from "./pages/user/homePage/HomePage";
import PaymentPage from "./pages/user/paymentPage/PaymentPage";
import RestaurantDetailPage from "./pages/user/restaurantDetailPage/RestaurantDetailPage";
import RestaurantsPage from "./pages/user/restaurantListPage/RestaurantsPage";
import MyPageOrderPage from "./pages/user/mypagePage/MyPageOrderPage";
import MyPageLayout from "./pages/user/mypagePage/MyPageLayout";
import MyPageReviewPage from "./pages/user/mypagePage/MyPageReviewPage";
import MyPageProfile from "./pages/user/mypagePage/MyPageProfile";
import MyPage from "./pages/user/mypagePage/MyPage";
import MyPageAddrList from "./pages/user/mypagePage/MyPageAddress";
import MyPageCardList from "./pages/user/mypagePage/MyPageCardList";
import MyPageInquiryList from "./pages/user/mypagePage/MyPageInquiryList";
import MyPageHelp from "./pages/user/mypagePage/MyPageHelp";
import OwnerSignupPage from "./pages/access/signupPage/OwnerSignupPage";

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
            <Route path="/signup" element={<SignupChoice />} />
            <Route path="/signup/user" element={<UserSignupPage />} />
            <Route path="/signup/owner" element={<OwnerSignupPage />} />
          </Route>

          {/* 유저 */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route path="/restaurants/:id" element={<RestaurantDetailPage />} />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/projectinfo" element={<ProjectInfo />} />
            <Route path="/orderview" element={<MyPageOrderPage />} />
            {/* 마이페이지 */}
            <Route path="/" element={<MyPageLayout />}>
              <Route path="/mypage" element={<MyPage />} />
              <Route path="/mypage/edit" element={<MyPageProfile />} />
              <Route
                path="/mypage/orderlist"
                element={<MyPageOrderListPage />}
              />
              <Route path="/mypage/order/:id" element={<MyPageOrderPage />} />
              <Route path="/mypage/reviewlist" element={<MyPageReviewPage />} />
              <Route path="/mypage/addrlist" element={<MyPageAddrList />} />
              <Route path="/mypage/cardlist" element={<MyPageCardList />} />
              <Route
                path="/mypage/inquirylist"
                element={<MyPageInquiryList />}
              />
              <Route path="/mypage/help" element={<MyPageHelp />} />
            </Route>
          </Route>

          {/* 사업자 라우터 */}

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
