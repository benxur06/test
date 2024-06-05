import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex gap-4 flex-col justify-center items-center h-screen">
      <h2>welcome to our website</h2>
      <Link
        className="bg-green-500 text-white px-4 py-2 rounded-md"
        to={"/login"}
      >
        login
      </Link>
      <Link
        className="bg-blue-500 text-white px-4 py-2 rounded-md"
        to={"/register"}
      >
        register
      </Link>
    </div>
  );
};

export default Home;
