import axios from "axios";

const api_url = 'http://127.0.0.1:8000';

export const FilterApi = axios.create({
  baseURL: api_url,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});
