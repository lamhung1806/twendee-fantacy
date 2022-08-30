import axios from "axios";

const instance = axios.create({
  baseURL: `https://fantasy-pl.twendeesoft.com/be/api/`,
});

export default instance;
