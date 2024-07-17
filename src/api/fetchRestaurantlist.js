import axios from "axios";

// 로컬 스토리지에서 위치 정보 가져오기
const locationData = JSON.parse(localStorage.getItem("locationData")) || {};

// 위도 및 경도 값이 유효한지 확인
const isValidLocation = locationData.latitude && locationData.longitude;

// 유효한 위치 정보를 사용하여 위도 및 경도 설정
const latitude = isValidLocation ? locationData.latitude : null;
const longitude = isValidLocation ? locationData.longitude : null;

// 식당 목록을 가져오는 함수
export const fetchRestaurantList = async (categoryId = 0) => {
  // API URL 생성 (위도, 경도 및 category_id 포함)
  const API_URL = `/api/restaurant?category_id=${categoryId}&page=1&order_type=1&addrX=${latitude}&addrY=${longitude}`;

  try {
    const { data } = await axios.get(API_URL);

    // API 응답 상태 확인
    if (data.statusCode !== 1) {
      throw new Error(
        `식당 목록 가져오기 실패: ${data.message || "알 수 없는 에러"}`,
      );
    }

    // 결과 데이터 반환
    return data.resultData.list;
  } catch (error) {
    console.error("식당 목록 가져오기 에러:", error.message);
    throw new Error("식당 목록을 가져오는 데 문제가 발생했습니다."); // 사용자 친화적인 에러 메시지
  }
};
