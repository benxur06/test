import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Login = () => {
  const { setIsAuth } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://987cb3fcb3eb9832.mokky.dev/auth",
        data
      );
      if (response.status === 201) {
        setIsAuth(true);
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("user-info", JSON.stringify(response.data.data));
      }
    } catch (error) {
      setErr(error.response.data.message);
    }
  };

  const handleData = (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    postData(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2>Login</h2>
        <form
          onSubmit={handleData}
          className="flex flex-col p-5 shadow-lg rounded-md gap-2"
        >
          <input
            className="border-2 border-gray-500"
            type="email"
            placeholder="email"
            name="email"
          />
          <input
            className="border-2 border-gray-500"
            type="password"
            placeholder="password"
            name="password"
          />
          <p className="text-red-500">{err}</p>
          <button className="bg-green-500 text-white">login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
