import { createContext, useEffect, useState } from "react";

export const BasketContext = createContext();

const BasketProvider = ({ children }) => {
  let storage = JSON.parse(localStorage.getItem("products"));

  const [basket, setBasket] = useState(storage || []);

  const getBasketData = (data) => {
    const isExist = basket.some((item) => item.id === data.id);
    if (!isExist) {
      setBasket([...basket, data]);
    }
  };

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(basket));
  }, [basket]);

  return (
    <BasketContext.Provider value={{ getBasketData, basket }}>
      {children}
    </BasketContext.Provider>
  );
};

export default BasketProvider;
