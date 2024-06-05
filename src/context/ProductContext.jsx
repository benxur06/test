import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null);

const ProductProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/products");
      setItems(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const onDelete = (id) => {
    const newData = items.filter((value) => value.id !== id);
    setItems(newData);
  };

  useEffect(() => {
    getData();
  }, []);
  return (
    <ProductContext.Provider value={{ items, onDelete }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductProvider;
