import axios from "axios";

export const vcnftApi = axios.create({
    baseURL: 'http://localhost:3000',
});