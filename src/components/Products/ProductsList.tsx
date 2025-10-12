import type { ProductList } from "../../interfaces/Products.interface";

function ProductsList({ data }: ProductList) {
  return (
    <div>
      {data.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

export default ProductsList;
