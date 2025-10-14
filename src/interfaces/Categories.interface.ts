export interface ICategoryProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  article: string;
  categoryUUID: string;
}

export interface ICategory {
  id: string;
  name: string;
  slug: string;
  description: string | null | [];
  imageUrl: string;
  minPrice: string;
  products: ICategoryProduct[] | null;
  children: ICategory[] | null;
}

export interface ICategoryMeta {
  totalCategories: number;
  cachedAt: string;
}
