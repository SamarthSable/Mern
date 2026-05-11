import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartList from "./pages/CartList";
import ProductList from "./pages/ProductList";
import ProductProvider from "./provider/ProductProvider";
import Detail from "./pages/Detail";

function App() {
  return (
    <>
      <ProductProvider>
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/mycart" element={<CartList />} />
        </Routes>
      </ProductProvider>
    </>
  );
}

export default App;
