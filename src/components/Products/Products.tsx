import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Pagination from "../Pagination/Pagination";
import { useState } from "react";
import { fetchAllProducts } from "../../adapters/services/ProductsService";
import ProductsList from "./ProductsList";

function Products() {
  const [page, setPage] = useState(0);
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", page],
    queryFn: () => fetchAllProducts(page),
    placeholderData: keepPreviousData,
    staleTime: 5000,
  });

  if (isLoading) {
    return <h3>Loading...</h3>;
  }
  if (isError) {
    return <h3>Error get product</h3>;
  }
  if (!data) {
    return <h3>Data not found</h3>;
  }

  return (
    <div>
      <h3 className="h3-manrope-bold">Products component</h3>
      <ProductsList {...data} />
      <Pagination />
    </div>
  );
}

export default Products;
