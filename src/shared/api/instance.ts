import axios from "axios";

const token = localStorage.getItem("token");
export const instance = axios.create({
  baseURL: process.env.API_BASE_URL,
  headers: {
    Authorization: "Bearer " + token,
  },
});
