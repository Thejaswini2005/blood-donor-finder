import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

export default API;

export const registerUser = async (userData) => {
  const { data } = await API.post("/auth/register", userData);
  return data;
};

export const loginUser = async (userData) => {
  const { data } = await API.post("/auth/login", userData);
  return data;
};

export const logoutUser = async () => {
  const { data } = await API.post("/auth/logout");
  return data;
};