import type { IProduct } from "../../interfaces/Products.interface";
import { ProductCard } from "./ProductCard";

export interface ProductListProps {
  data: IProduct[];
}

export const ProductsList: React.FC<ProductListProps> = ({ data }: ProductListProps) => {
  return (
    <ul className="-mx-[20px] grid grid-cols-2 gap-3 sm:mx-0 lg:grid-cols-4">
      {data.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </ul>
  );
};
