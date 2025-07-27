import axiosInstance from "../api/axiosInstance.js";

export const loginUser = async (credentials) => {
  try {
    const response = await axiosInstance.post("/auth/login", credentials);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const authMe = async () => {
  try {
    const response = await axiosInstance.get("/auth/me");
    return response.data;
  } catch (error) {
    throw error;
  }
};
