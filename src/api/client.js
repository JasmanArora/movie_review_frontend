import axios from "axios";

const client = axios.create({
  baseURL: "https://movie-review-backend.vercel.app/api",
});

export default client;
