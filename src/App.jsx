import { Route, Routes } from "react-router-dom";
import MenuManagement from "./pages/owner/ownerPage/MenuManagement";
import Orders from "./pages/owner/ownerPage/Orders";
import Reviews from "./pages/owner/ownerPage/Reviews";
import Statistics from "./pages/owner/ownerPage/Statistics";
import StoreManagement from "./pages/owner/ownerPage/StoreManagement";
import AdminLayout from "./components/layout/AdminLayout";
import CeoLayout from "./components/layout/CeoLayout";
import RootLayout from "./components/layout/RootLayout";
import AdminPage from "./pages/admin/adminPage/AdminPage";
import HomePage from "./pages/homePage/HomePage";
import LoginPage from "./pages/access/LoginPage";
import MyPageAddress from "./pages/mypagePage/MyPageAddress";
import MyPageOrderListPage from "./pages/mypagePage/MyPageOrderListPage";
import MyPageOrderPage from "./pages/mypagePage/MyPageOrderPage";
import MyPage from "./pages/mypagePage/MyPageProfile";
import MyPageReviewPage from "./pages/mypagePage/MyPageReviewPage";
import NotFound from "./components/common/NotFound";
import CeoPage from "./pages/owner/ownerPage/CeoPage";
import PaymentPage from "./pages/user/paymentPage/PaymentPage";
import ProjectInfo from "./components/common/ProjectInfo";
import Test from "./pages/Test";

import AccountLayout from "./components/layout/AccountLayout";
import MyPageLayout from "./pages/mypagePage/MyPageLayout";
import RestaurantDetailPage from "./pages/user/restaurantDetailPage/RestaurantDetailPage";
import RestaurantsPage from "./pages/user/restaurantListPage/RestaurantsPage";
import SignupChoice from "./pages/access/signupPage/SignupChoice";
import UserSignupPage from "./pages/access/signupPage/UserSignupPage";

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
