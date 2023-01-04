import axios from "axios";

const { token } = JSON.parse(localStorage.getItem("user_token") || "");

const client = axios.create({
  baseURL: "https://v3.football.api-sports.io",
  headers: {
    "x-rapidapi-key": token,
    "x-rapidapi-host": "v3.football.api-sports.io",
  },
});

export default client;
