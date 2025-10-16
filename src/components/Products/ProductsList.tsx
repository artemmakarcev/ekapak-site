import type { IProduct } from "../../interfaces/Products.interface";
import { ProductCard } from "./ProductCard";

export interface ProductListProps {
  data: IProduct[];
}

export const ProductsList: React.FC<ProductListProps> = ({ data }: ProductListProps) => {
  return (
    <div className="grid justify-center gap-2.5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {data.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};
