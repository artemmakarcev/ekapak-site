import React, { useState } from "react";
import type { IProduct } from "../../interfaces/Products.interface";
import placeholderProduct from "../../assets/placeholderProduct.png";
import { Tooltip } from "../Common/Tooltip";

import HeartIcon from "../../assets/heart.svg?react";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
  const minPrice = product.offers.length > 0 ? product.offers[0].price : 0;
  const [countPieces, setCountPieces] = useState<number>(product.minPurchasePieces);

  const textAboutAvailable = `Только для Юрлиц и ИП. Изготовление товара под заказ занимает до 10 рабочих дней. В корзине вы можете выбрать опцию "Срочно": срок изменится до 3-х дней, а цена вырастет на 3%`;

  return (
    <div className="flex flex-col w-64 rounded-md bg-white xl:p-4 md:p-2 hover:bg-background">
      <div className="flex justify-center items-center relative">
        <img
          src={product.images.length > 0 ? product.images[0].cardUrl : placeholderProduct}
          alt={product.name}
          className="w-full rounded-md object-cover"
        />
        <HeartIcon className="absolute  top-2 right-2 text-blue hover:fill-blue" />
      </div>

      <div className="mt-[20px] flex flex-1 flex-col">
        <div className="text-xs text-gray">Арт. {product.article}</div>
        <p className="line-clamp-3 h-full font-normal">{product.name}</p>
      </div>

      <div className="mt-[20px] flex items-center gap-2">
        <div className="flex flex-row">
          <div className="flex flex-inline ">
            <span className="price-manrope">{minPrice} ₽ / шт. </span> <Tooltip message="С НДС 20%">*</Tooltip>
          </div>
        </div>

        <div className={`ml-auto cursor-pointer font-normal ${product.isAvailable ? "text-green" : "text-blue"}`}>
          {product.isAvailable ? (
            <div>
              <p>В наличии</p>
            </div>
          ) : (
            <div className="flex flex-inline">
              <p>Под заказ</p> <Tooltip message={textAboutAvailable}>?</Tooltip>
            </div>
          )}
        </div>
      </div>

      <div className="flex h-[60px] mt-[30px] w-full items-center justify-center rounded-md border-1 border-gray-border">
        <button
          className="flex items-center justify-center h-[30px] w-[30px] cursor-pointer rounded-md bg-background text-lg hover:bg-gray"
          onClick={() => setCountPieces(countPieces - 1)}
        >
          -
        </button>
        <div className="flex flex-col justify-center gap-1">
          <span className="px-3 text-center text-sm">{countPieces} шт</span>
          <span className="px-3 text-xs text-gray">на {Math.floor(minPrice * countPieces * 100) / 100} ₽</span>
        </div>
        <button
          className="flex items-center justify-center h-[30px] w-[30px] cursor-pointer rounded-md bg-background text-lg hover:bg-gray"
          onClick={() => setCountPieces(countPieces + 1)}
        >
          +
        </button>
      </div>

      <button className="mt-[10px] cursor-pointer rounded-md  py-2 text-bold text-white bg-blue hover:bg-blue-active">Добавить в корзину</button>
    </div>
  );
};
