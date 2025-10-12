export type ImageApi = {
  original_url: string;
  card_url: string;
};

export type OfferApi = {
  uuid: string;
  price: string;
  currency: string;
  unit: string;
  quantity: number;
};

export type ProductApi = {
  uuid: string;
  name: string;
  description: string;
  slug: string;
  category_uuid: string;
  offers_min_price: string;
  offers?: OfferApi[] | null;
  ["Мин. покупка, шт."]: string;
  ["Наличие"]?: string | null;
  article: string;
  in_cart: boolean;
  images: ImageApi[];
  properties: Record<string, string>;
};

export type MetaApi = {
  total: number;
  current_page: number;
  last_page: number;
  per_page: number;
  cached_at: string;
};

export type ProductsDataApi = {
  data: ProductApi[];
  meta: MetaApi;
};
