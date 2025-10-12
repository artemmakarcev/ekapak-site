import type { IProduct, IImage, IOffer } from "../interfaces/Products.interface";
import type { ImageApi, MetaApi, OfferApi, ProductsDataApi, ProductApi } from "./types/Products.type";

const adaptImage = (data: ImageApi[]): IImage[] => {
  return data.map(
    (item) =>
      ({
        originalUrl: item.original_url,
        cardUrl: item.card_url,
      }) as IImage
  );
};

const adaptOffer = (data: OfferApi[]): IOffer[] => {
  return data.map(
    (item) =>
      ({
        id: item.uuid,
        price: parseFloat(item.price) || 0,
        currency: item.currency,
        unit: item.unit,
        quantity: item.quantity,
      }) as IOffer
  );
};

export const adaptProduct = (data: ProductApi[]): IProduct[] => {
  return data.map(
    (item) =>
      ({
        id: item.uuid,
        name: item.name,
        description: item.description.trim(),
        slug: item.slug,
        categoryId: item.category_uuid,
        offersMinPrice: parseFloat(item.offers_min_price) || 0,
        offers: item.offers ? adaptOffer(item.offers) : ([] as IOffer[]),
        minPurchasePieces: parseInt(item["Мин. покупка, шт."], 10) || 1,
        availability: item["Наличие"],
        article: item.article,
        images: item.images.length > 0 ? adaptImage(item.images) : ([] as IImage[]),
        properties: { ...item.properties },
      }) as IProduct
  );
};

export type ProductsResponse = { data: IProduct[]; meta: MetaApi };

export const adaptProductsData = (productResponse: ProductsDataApi): ProductsResponse => {
  return {
    data: adaptProduct(productResponse.data),
    meta: productResponse.meta,
  };
};
