import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/homePage";
import ProductsPage from "./Pages/productsPage";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/products" element={<ProductsPage/>}/>
    </Routes>
    </>
  );
}

export default App;
