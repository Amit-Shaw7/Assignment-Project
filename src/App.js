import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./layout/navbar/Navbar";
import HomePage from "./pages/home/HomePage";
import { Toaster } from "react-hot-toast";
import AllProduct from "./pages/products/AllProduct";
import Form from "./components/form/Form";
import ProductDetails from "./pages/products/ProductDetails";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/products/all" element={<AllProduct />} />
        <Route exact path="/signup" element={<Form type="signup" />} />
        <Route exact path="/login" element={<Form type="login" />} />
        <Route exact path="/products/edit/:productId" element={<Form type="edit" />} />
        <Route exact path="/products/add" element={<Form type="add" />} />
        <Route exact path="/products/:productId" element={<ProductDetails />} />
      </Routes>
      <Toaster position="top-center" />
    </BrowserRouter>
  );
}

export default App;
