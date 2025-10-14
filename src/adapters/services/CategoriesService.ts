import { categoryAPI } from "../../api/api";
import type { ICategory } from "../../interfaces/Categories.interface";
import { adaptCategory } from "../CategoryDataAdapter";

export const fetchCategories = async (): Promise<ICategory[]> => {
  const { data } = await categoryAPI.getAllCategory();
  return adaptCategory(data);
};
