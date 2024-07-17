import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";
import ToTop from "../common/ToTop";
import LocationSearch from "../common/LocationSearch";
import RestaurantsFilters from "../common/RestaurantsFilters";

function RootLayout() {
  const location = useLocation();

  // 위치 검색 사용 시 path 등록
  const searchPaths = ["/restaurants"];
  const mypagePaths = ["/mypage"];
  // Register path used when filtering restaurant category
  const restaurantsPaths = ["/restaurants", "/restaurantdetail"];

  const isHomePage = location.pathname === "/";
  const isSearchPath = searchPaths.some(path =>
    location.pathname.startsWith(path),
  );
  const isRestaurantsPaths = restaurantsPaths.some(path =>
    location.pathname.startsWith(path),
  );
  const isMyPagePaths = mypagePaths.some(path =>
    location.pathname.startsWith(path),
  );

  return (
    <>
      <ToTop />

      <Header />

      {isHomePage && <LocationSearch />}
      {isSearchPath && <LocationSearch />}
      {isRestaurantsPaths && <RestaurantsFilters />}

      <main className="main">
        <div className="inner">
          <Outlet />
        </div>
      </main>

      {!isMyPagePaths && <Footer />}
    </>
  );
}

export default RootLayout;
