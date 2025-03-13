import axios from "axios";

const instance = axios.create({
  baseURL: `https://dev-server.twendeesoft.com/fantacy/be/api/`,
});

export default instance;
