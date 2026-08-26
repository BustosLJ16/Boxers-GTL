import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage";
import ProductsPage from "./Pages/productsPage";
import ProductDetailPage from "./Pages/productDetailPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
      <Route path="/product/:id" element={<ProductDetailPage/>}/>
    </Routes>
    </>
  );
}

export default App;
