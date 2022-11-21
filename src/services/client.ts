import axios from "axios";

const client = axios.create({
  baseURL: "https://v3.football.api-sports.io",
});

export default client;
