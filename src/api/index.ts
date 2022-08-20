import axios from "axios";

const instance = axios.create({
  baseURL: `http://54.179.55.245:8097/api`,
});

export default instance;
