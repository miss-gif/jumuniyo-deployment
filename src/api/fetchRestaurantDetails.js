import axios from "axios";

const API_URL = "/api/restaurant";

export const fetchRestaurantDetails = async id => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error("Failed to fetch restaurant details:", error);
    throw error;
  }
};
