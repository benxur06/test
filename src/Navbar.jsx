import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ProductContext } from "./context/ProductContext";
import { BasketContext } from "./context/BasketContext";
import { AuthContext } from "./context/AuthContext";

const Navbar = () => {
  const { basket } = useContext(BasketContext);
  const { setIsAuth } = useContext(AuthContext);
  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("token");
  };
  return (
    <nav className="flex justify-between border-b border-b-gray-500 p-4">
      <div className="flex gap-3">
        <NavLink className={"border-b-2 border-b-transparent"} to="/">
          home
        </NavLink>
        <NavLink className={"border-b-2 border-b-transparent"} to="/about">
          about
        </NavLink>
        <NavLink className={"border-b-2 border-b-transparent"} to={"/contact"}>
          contact
        </NavLink>
        <NavLink className={"border-b-2 border-b-transparent"} to={"/products"}>
          products
        </NavLink>
        <NavLink className={"border-b-2 border-b-transparent"} to={"/karzinka"}>
          karzinka:{basket.length}
        </NavLink>
      </div>
      <button onClick={logout}>chiqish</button>
    </nav>
  );
};

export default Navbar;
