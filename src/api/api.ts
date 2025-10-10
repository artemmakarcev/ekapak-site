import axios from "axios";
const API_URL = import.meta.env.VITE_API_URL;

const instance = axios.create({
  baseURL: API_URL,
  withCredentials: false,
});

export const productAPI = {
  async getAllProducts(page: number) {
    const response = await instance.get(`products?page=${page}`);
    return response.data;
  },
  async getAllProDuctsByCategory(uuid: string, page: number) {
    const response = await instance.get(`products?category=${uuid}&page=${page}`);
    return response.data;
  },
  async getProductByUUID(uuid: string) {
    const response = await instance.get(`products/${uuid}`);
    return response.data;
  },
  async getProductBySlug(slug: string) {
    const response = await instance.get(`products/slug/${slug}`);
    return response.data;
  },
};

export const categoryAPI = {
  async getAllCategory() {
    const response = await instance.get(`categories`);
    return response.data;
  },
};
