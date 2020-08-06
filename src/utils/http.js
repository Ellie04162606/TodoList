import axios from "axios";

const toDoApi = axios.create({
  baseURL: "https://5e9ec500fb467500166c4658.mockapi.io/todos",
});

export default toDoApi ;