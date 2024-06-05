import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
export default PublicRoutes;
