import axios from "axios";

const customAxios = axios.create({
  baseURL: "",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default customAxios;
