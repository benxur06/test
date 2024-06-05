import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useSearchParams } from "react-router-dom";

const SearchPage = () => {
  const { search } = useLocation();
  const [state, setState] = useState([]);

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/search${search}`
      );
      setState(response.data.products);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, [search]);
  return (
    <div>
      <h2>Result {state.length}</h2>
      <ul className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {state.map((item) => (
          <li key={item.id}>
            <Link to={`/products/${item.id}`}>
              <img src={item.thumbnail} alt="phone" />
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchPage;
