export interface CategoryProductApi {
  uuid: string;
  name: string;
  description: string;
  slug: string;
  article: string;
  category_uuid: string;
}

export type CategoryApi = {
  uuid: string;
  name: string;
  slug: string;
  description: string | null | [];
  image_url: string;
  min_price: string;
  products: CategoryProductApi[] | null;
  children: CategoryApi[] | null;
};

export type MetaCategoryApi = {
  total: number;
  cached_at: string;
};

export type CategoryDataApi = {
  data: CategoryApi[];
  meta: MetaCategoryApi;
};
