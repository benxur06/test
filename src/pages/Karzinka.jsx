import { useContext } from "react";
import { BasketContext } from "../context/BasketContext";

const Karzinka = () => {
  const { basket } = useContext(BasketContext);
  return (
    <div>
      <h2>karzinka</h2>
      <div className="grid grid-cols-4 gap-4">
        {basket.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.thumbnail} alt="photo" />
              <h2>{item.title}</h2>
              <b>{item.price}</b>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Karzinka;
