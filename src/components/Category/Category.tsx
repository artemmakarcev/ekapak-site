import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../adapters/services/CategoriesService";
import { CategoryItem } from "./CategoryItem";

export const Category: React.FC = () => {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchCategories,
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
    <div className="w-96 relative bg-white rounded-[20px] overflow-hidden p-[30px]">
      <h2 className="text-black text-2xl font-bold font-['Manrope'] leading-loose">Каталог товаров</h2>
      <div className="w-72 absolute inline-flex flex-col justify-start items-start gap-2.5">
        {data.map((item) => (
          <CategoryItem key={item.id} category={item} level={0} />
        ))}
      </div>
    </div>
  );
};
