import Products from "./components/Products/Products";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import { Category } from "./components/Category/Category";

function App() {
  return (
    <div className="flex w-full justify-center bg-gray-50">
      <div className="flex flex-col gap-2">
        <div className="rounded-md bg-white">
          <ShoppingCart />
        </div>
        <div className="flex flex-row gap-2">
          <div className="rounded-md bg-white hidden 2xl:flex xl:flex">
            <Category />
          </div>
          <Products />
        </div>
      </div>
    </div>
  );
}

export default App;
