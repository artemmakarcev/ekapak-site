import CategorySidebar from "../components/Category/CategorySidebar";
import Products from "../components/Products/Products";

const Home: React.FC = () => {
  return (
    <div className="container">
      <div className="pt-[20px] lg:pt-10">
        <div className="mb-[60px] grid grid-cols-4 grid-rows-1 items-start gap-[10px] lg:mb-[var(--main-gap)]">
          <CategorySidebar />
          <Products />
        </div>
      </div>
    </div>
  );
};
export default Home;
