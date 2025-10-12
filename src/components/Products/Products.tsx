import { keepPreviousData, useQuery } from "@tanstack/react-query";
import Pagination from "../Pagination/Pagination";
import { fetchProducts } from "../../adapters/services/ProductsService";
import ProductsList from "./ProductsList";
import { useAppSelector } from "../../redux/hooks";

function Products() {
  const currentPage = useAppSelector((state) => state.productSlice.currentPage);
  const selectedCategory = useAppSelector((state) => state.productSlice.selectedCategory);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", currentPage, selectedCategory],
    queryFn: () => fetchProducts(currentPage, selectedCategory),
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
