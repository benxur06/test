import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import NotFound from "./NotFound";

const DynamicPage = () => {
  const params = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const [isError, setIsError] = useState(false);
  const [msg, setMsg] = useState("");

  const getData = async () => {
    try {
      const response = await axios.get(
        `https://dummyjson.com/products/${params.id}`
      );
      setData(response.data);
      setIsError(false);
    } catch (error) {
      setMsg(error.response.data.message);
      setIsError(true);
    }
  };
  useEffect(() => {
    getData();
  }, [params.id]);

  return (
    <div className="max-w-[1200px] mx-auto p-5">
      <button
        onClick={() => navigate(-1)}
        className="px-4 py-2 rounded-md bg-purple-500 text-white"
      >
        orqaga qaytish
      </button>
      {isError ? (
        <NotFound />
      ) : (
        <div>
          <div style={{ height: "350px" }}>
            <img src={data.thumbnail} alt="photo" />
            <div>
              <h2>{data.title}</h2>
              <h3>{data.price}</h3>
            </div>
          </div>
          <button className="px-4 py-2 rounded-md bg-green-500 text-white">
            sotib olish
          </button>
        </div>
      )}
    </div>
  );
};

export default DynamicPage;
