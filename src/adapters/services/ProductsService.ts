import { productAPI } from "../../api/api";
import { adaptProductsData, type ProductsResponse } from "../ProductDataAdapter";

export const fetchAllProducts = async (page: number): Promise<ProductsResponse> => {
  const { data } = await productAPI.getAllProducts(page);
  const dataProduct = adaptProductsData(data);
  return dataProduct;
};
