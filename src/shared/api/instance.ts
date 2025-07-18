import axios from "axios";

export const token = localStorage.getItem("spg_token");
export const instance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    Authorization: "Bearer " + token,
    "ngrok-skip-browser-warning": "true",
    Accept: "application/json",
  },
});
