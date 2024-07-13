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

import OwnerLayout from "./components/layout/OwnerLayout";
import OwnerSignupPage from "./pages/access/signupPage/OwnerSignupPage";
import OwnerMenusPage from "./pages/owner/ownerMenusPage/OwnerMenusPage";
import OwnerOrderHistoryPage from "./pages/owner/ownerOrderHistoryPage/OwnerOrderHistoryPage";
import OwnerOrdersPage from "./pages/owner/ownerOrdersPage/OwnerOrdersPage";
import OwnerPage from "./pages/owner/ownerPage/OwnerPage";
import OwnerReviewsPage from "./pages/owner/ownerReviewsPage/OwnerReviewsPage";
import OwnerStoresPage from "./pages/owner/ownerStoresPage/OwnerStoresPage";

import HomePage from "./pages/user/homePage/HomePage";

import MyPage from "./pages/user/mypagePage/MyPage";
import MyPageAddrList from "./pages/user/mypagePage/MyPageAddress";
import MyPageCardList from "./pages/user/mypagePage/MyPageCardList";
import MyPageHelp from "./pages/user/mypagePage/MyPageHelp";
import MyPageInquiryList from "./pages/user/mypagePage/MyPageInquiryList";
import MyPageLayout from "./pages/user/mypagePage/MyPageLayout";
import MyPageOrderPage from "./pages/user/mypagePage/MyPageOrderPage";
import MyPageProfile from "./pages/user/mypagePage/MyPageProfile";
import MyPageReviewPage from "./pages/user/mypagePage/MyPageReviewPage";

import PaymentPage from "./pages/user/paymentPage/PaymentPage";
import RestaurantDetailPage from "./pages/user/restaurantDetailPage/RestaurantDetailPage";
import RestaurantsPage from "./pages/user/restaurantListPage/RestaurantsPage";
import OwnerDashboardPage from "./pages/owner/ownerDashboardPage/OwnerDashboardPage";
import LoginPage2 from "./pages/access/LoginPage2";
import LoginPage3 from "./pages/access/LoginPage3";

// 사업자

function App() {
  return (
    <>
      <div className="root-wrap">
        <Routes>
          <Route path="/" element={<AccountLayout />}>
            {/* 로그인 */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/login2" element={<LoginPage2 />} />
            <Route path="/login3" element={<LoginPage3 />} />

            {/* 회원가입 */}
            <Route path="/signup" element={<SignupChoice />} />
            <Route path="/signup/user" element={<UserSignupPage />} />
            <Route path="/signup/owner" element={<OwnerSignupPage />} />
          </Route>

          {/* 유저 */}
          <Route path="/" element={<RootLayout />}>
            <Route index element={<HomePage />} />
            <Route path="/restaurants" element={<RestaurantsPage />} />
            <Route
              path="/restaurantdetail/:id"
              element={<RestaurantDetailPage />}
            />
            <Route path="/payment" element={<PaymentPage />} />
            <Route path="/projectinfo" element={<ProjectInfo />} />
            <Route path="/orderview" element={<MyPageOrderPage />} />
          </Route>

          {/* 마이페이지 */}
          <Route path="/mypage" element={<MyPageLayout />}>
            <Route index element={<MyPage />} />
            <Route path="profile" element={<MyPageProfile />} />
            <Route path="orderlist" element={<MyPageOrderListPage />} />
            <Route path="order/:id" element={<MyPageOrderPage />} />
            <Route path="reviewlist" element={<MyPageReviewPage />} />
            <Route path="addrlist" element={<MyPageAddrList />} />
            <Route path="cardlist" element={<MyPageCardList />} />
            <Route path="inquirylist" element={<MyPageInquiryList />} />
            <Route path="help" element={<MyPageHelp />} />
          </Route>

          {/* 사업자 라우터 */}
          <Route path="/owner" element={<OwnerLayout />}>
            <Route index element={<OwnerPage />} />
            <Route path="menus" element={<OwnerMenusPage />} />
            <Route path="order-history" element={<OwnerOrderHistoryPage />} />
            <Route path="orders" element={<OwnerOrdersPage />} />
            <Route path="reviews" element={<OwnerReviewsPage />} />
            <Route path="stores" element={<OwnerStoresPage />} />
            <Route path="dashboard" element={<OwnerDashboardPage />} />
          </Route>

          {/* 관리자 라우터 */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminPage />} />
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
