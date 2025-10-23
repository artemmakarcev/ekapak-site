import React, { useState } from "react";
import type { IProduct } from "../../interfaces/Products.interface";
import { Tooltip } from "../Common/Tooltip";
import { NavLink } from "react-router-dom";

import productBaseImg from "../../assets/img/productBaseImg.png";
import HeartIcon from "../../assets/img/heart.svg?react";

interface ProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }: ProductCardProps) => {
  const minPrice = product.offers.length > 0 ? product.offers[0].price : 0;
  const [countPieces, setCountPieces] = useState<number>(product.minPurchasePieces);

  const textAboutAvailable = `Только для Юрлиц и ИП. Изготовление товара под заказ занимает до 10 рабочих дней. В корзине вы можете выбрать опцию "Срочно": срок изменится до 3-х дней, а цена вырастет на 3%`;
  return (
    <li className="relative flex flex-col rounded-[10px] bg-white p-[10px] lg:rounded-[20px] lg:p-5">
      <button>
        <HeartIcon className="absolute top-[20px] right-[20px] z-10 cursor-pointer fill-white text-blue transition-all hover:fill-blue" />
      </button>
      <NavLink
        to={`/products/slug/${product.slug}`}
        className="group/main mb-[10px] aspect-[1/1] overflow-hidden rounded-[6px] lg:mb-5"
      >
        <img
          src={product.images.length > 0 ? product.images[0].cardUrl : productBaseImg}
          alt={product.name}
          className="h-full w-full object-cover transition-transform group-hover/main:scale-110"
        />
      </NavLink>
      <p className="mb-1 line-clamp-3 text-mini">Арт. {product.article}</p>
      <NavLink
        to={`/products/slug/${product.slug}`}
        className="hover:text-primary mb-[15px] title-card transition-colors lg:mb-5"
      >
        {product.name}
      </NavLink>

      <div className="mb-1 text-mini">
        <div className="flex flex-row">
          <div className="flex-inline flex">
            <span className="price-manrope">{minPrice} ₽ / шт. </span> <Tooltip message="С НДС 20%">*</Tooltip>
          </div>
        </div>

        <div className={`ml-auto cursor-pointer font-normal ${product.isAvailable ? "text-green" : "text-blue"}`}>
          {product.isAvailable ? (
            <div>
              <p>В наличии</p>
            </div>
          ) : (
            <div className="flex-inline flex">
              <p>Под заказ</p> <Tooltip message={textAboutAvailable}>?</Tooltip>
            </div>
          )}
        </div>
      </div>

      <div className="mt-[30px] flex h-[60px] w-full items-center justify-center rounded-md border-1 border-gray-border">
        <button
          className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-md bg-background text-lg hover:bg-gray"
          onClick={() => setCountPieces(countPieces - 1)}
        >
          -
        </button>
        <div className="flex flex-col justify-center gap-1">
          <span className="px-3 text-center text-sm">{countPieces} шт</span>
          <span className="px-3 text-xs text-gray">на {Math.floor(minPrice * countPieces * 100) / 100} ₽</span>
        </div>
        <button
          className="flex h-[30px] w-[30px] cursor-pointer items-center justify-center rounded-md bg-background text-lg hover:bg-gray"
          onClick={() => setCountPieces(countPieces + 1)}
        >
          +
        </button>
      </div>

      <button className="text-bold mt-[10px] cursor-pointer rounded-md bg-blue py-2 text-white hover:bg-blue-active">
        Добавить в корзину
      </button>
    </li>
  );
};
