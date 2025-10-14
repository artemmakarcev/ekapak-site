import type { ICategory, ICategoryMeta, ICategoryProduct } from "../interfaces/Categories.interface";
import type { CategoryApi, CategoryDataApi, CategoryProductApi, MetaCategoryApi } from "./types/Categores.type";

export const adaptCategoryProduct = (data: CategoryProductApi[]): ICategoryProduct[] => {
  return data.map(
    (item) =>
      ({
        id: item.uuid,
        name: item.name,
        description: item.description,
        slug: item.slug,
        article: item.article,
        categoryUUID: item.category_uuid,
      }) as ICategoryProduct
  );
};

export const adaptCategory = (data: CategoryApi[]): ICategory[] => {
  return data.map(
    (item) =>
      ({
        id: item.uuid,
        name: item.name,
        slug: item.slug,
        description: item.description,
        imageUrl: item.image_url,
        minPrice: item.min_price,
        products: item.products ? adaptCategoryProduct(item.products) : ([] as ICategoryProduct[]),
        children: item.children ? adaptCategory(item.children) : ([] as ICategory[]),
      }) as ICategory
  );
};
