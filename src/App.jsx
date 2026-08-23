import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.jsx";
import ProductDetailPage from "./Pages/ProductDetailPage.jsx";

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/prod/:id" element={<ProductDetailPage/>}/>
    </Routes>
    </>
  );
}

export default App;
