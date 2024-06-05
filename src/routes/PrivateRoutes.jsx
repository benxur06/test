import { Route, Routes } from "react-router-dom";
import Navbar from "../Navbar";
import Search from "../components/Search";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Products from "../pages/Products";
import DynamicPage from "../pages/DynamicPage";
import SearchPage from "../pages/SearchPage";
import Karzinka from "../pages/Karzinka";

const PrivateRoutes = () => {
  const userData = JSON.parse(localStorage.getItem("user-info"));
  return (
    <div className="max-w-[1300px] mx-auto p-12">
      <h2>{userData.fullName}</h2>
      <Navbar />
      <Search />
      <Routes>
        <Route path="/" element={<h1>welcome to home page</h1>} />
        <Route path="/about" element={<About />} />
        <Route path="/about/info" element={<h1>info page</h1>} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<DynamicPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/karzinka" element={<Karzinka />} />
        <Route path="*" element={<h1>page not found</h1>} />
      </Routes>
      <footer>footer</footer>
    </div>
  );
};

export default PrivateRoutes;
