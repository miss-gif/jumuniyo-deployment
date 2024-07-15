import React from "react";
import { Link } from "react-router-dom";
import useFetchRestaurantData from "../hooks/useFetchRestaurantData";
import SideNav from "../components/common/SideNav";

const Test2 = () => {
  const { restaurantData, isLoading, error, fetchData } =
    useFetchRestaurantData();

  return (
    <div>
      <button onClick={fetchData}>식당 목록 가져오기</button>

      {isLoading ? (
        <p>로딩 중...</p>
      ) : error ? (
        <p>에러 발생: {error.message}</p>
      ) : (
        <div>
          <h2>식당 목록</h2>
          <ul>
            {restaurantData.map(restaurant => (
              <li key={restaurant.restaurantPk}>
                <Link to={`/restaurantdetail/${restaurant.restaurantPk}`}>
                  {restaurant.restaurantName} - {restaurant.restaurantAddr}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}

      <SideNav />
    </div>
  );
};

export default Test2;
