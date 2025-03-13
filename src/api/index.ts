import axios from "axios";

const instance = axios.create({
  baseURL: `dev-server.twendeesoft.com/fantacy/be/api/`,
});

export default instance;
