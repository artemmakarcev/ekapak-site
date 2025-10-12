import { productAPI } from "../../api/api";
import { adaptProductsData, type ProductsResponse } from "../ProductDataAdapter";

export const fetchProducts = async (page: number, category: string | null): Promise<ProductsResponse> => {
  const { data } = await productAPI.getProducts(page, category);
  const dataProduct = adaptProductsData(data);
  return dataProduct;
};
