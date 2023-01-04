import client from "./client";
import { ToastContainer, toast } from "react-toastify";

export default class StatisticService {
  async fetchCountries() {
    try {
      const { data, status } = await client.get("/countries");
      return data.response;
    } catch (e) {
      console.error(e);
      toast.error("Ops. Ocorreu um erro ao buscar os países. Tente novamente");
    }
  }
}
