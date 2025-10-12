export interface IImage {
  originalUrl: string;
  cardUrl: string;
}

export interface IOffer {
  id: string;
  price: number;
  currency: string;
  unit: string;
  quantity: number;
}

export interface IProduct {
  id: string;
  name: string;
  description: string;
  slug: string;
  categoryId: string;
  offersMinPrice: number;
  offers: IOffer[];
  minPurchasePieces: number;
  isAvailable: boolean;
  article: string;
  images: IImage[] | [];
  properties: Record<string, string>;
}
