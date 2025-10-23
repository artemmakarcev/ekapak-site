import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "../../adapters/services/CategoriesService";
import { CategoryItem } from "./CategoryItem";

const CategorySidebar: React.FC = () => {
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
    <aside className="hd:col-span-1 hd:block sticky-offset z-20 row-span-full wrap hidden self-start px-0 pb-5 xl:col-span-1 xl:block">
      <h3 className="mb-[10px] px-[30px] subtitle">Каталог товаров</h3>
      <ul className="flex flex-col">
        {data.map((item) => (
          <CategoryItem key={item.id} category={item} level={0} />
        ))}
      </ul>
    </aside>
  );
};

export default CategorySidebar;
