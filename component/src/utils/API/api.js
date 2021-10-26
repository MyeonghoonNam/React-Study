import axios from 'axios';
import { API_END_POINT } from '../../constants/environment';

const API = axios.create({
  baseURL: API_END_POINT,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default API;
