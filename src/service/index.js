import axios from "axios";

export default axios.create({
  baseURL: "https://redin-api.herokuapp.com",
});