import axios from "axios";
// import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/tailieu/";

const getAllTaiLieu = () => {
  return axios.get(API_URL);
};

const createTaiLieu = (MaTaiLieu, TenTaiLieu) => {
  return axios.post(API_URL + 'create', {MaTaiLieu, TenTaiLieu});
};

// const getUserBoard = () => {
//   return axios.get(API_URL + "user", { headers: authHeader() });
// };

// const getModeratorBoard = () => {
//   return axios.get(API_URL + "mod", { headers: authHeader() });
// };

// const getAdminBoard = () => {

//   return axios.get(API_URL + "admin", { headers: authHeader() });
// };

const tailieuService = {
    getAllTaiLieu,
    createTaiLieu,
//   getUserBoard,
//   getModeratorBoard,
//   getAdminBoard,
};

export default tailieuService;
