import axios from "axios";

const API_URL = "/api/sign-in";

export const loginUser = async (username, password) => {
  try {
    const response = await axios.post(API_URL, {
      user_id: username,
      user_pw: password,
    });
    console.log("loginUser", response.data);
    return response.data;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error;
  }
};
