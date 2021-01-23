import { create } from "apisauce";

const apiClient = create({
  baseURL: "http://192.168.0.106:9000/api", // my PC I.P Address (or the BE api URL)
});

export default apiClient;
