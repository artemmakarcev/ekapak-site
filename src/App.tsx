import Products from "./components/Products/Products";
import ShoppingCart from "./components/ShoppingCart/ShoppingCart";
import Catalog from "./components/Catalog/Catalog";

function App() {
  return (
    <div>
      <div>
        <ShoppingCart />
      </div>
      <div>
        <Catalog />
        <Products />
      </div>
    </div>
  );
}

export default App;
