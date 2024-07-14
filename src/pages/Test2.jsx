import React, { useState, useEffect } from "react";
import { fetchRestaurantlist } from "../api/fetchRestaurantlist";

const Test2 = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const data = await fetchRestaurantlist();
      setRestaurantData(data); // 받아온 데이터를 바로 저장 (이미 list 형태)
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData(); // 컴포넌트 마운트 시 초기 데이터 가져오기
  }, []);

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
                {restaurant.restaurantName} - {restaurant.restaurantAddr}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Test2;
