import axios from "axios";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

const Register = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const { setIsAuth } = useContext(AuthContext);
  const postData = async (data) => {
    try {
      const response = await axios.post(
        "https://987cb3fcb3eb9832.mokky.dev/register",
        data
      );
      if (response.status === 201) {
        localStorage.setItem("user-info", JSON.stringify(response.data.data));
        localStorage.setItem("token", response.data.token);
        setIsAuth(true);
      }
    } catch (error) {
      setErrorMsg(error.response.data.message);
    }
  };

  const handleData = (e) => {
    e.preventDefault();
    let fullName = e.target.fullName.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let retypePassword = e.target.retypePassword.value;
    if (password !== retypePassword) {
      setErrorMsg("parol mos kelmadi");
      return;
    }
    setErrorMsg("");
    const data = {
      fullName,
      email,
      password,
    };
    postData(data);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <h2>Register</h2>
        <form
          onSubmit={handleData}
          className="flex flex-col p-5 shadow-lg rounded-md gap-2"
        >
          <input
            className="border-2 border-gray-500"
            type="text"
            placeholder="full name"
            name="fullName"
          />
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
          <input
            className="border-2 border-gray-500"
            type="password"
            placeholder="retype password"
            name="retypePassword"
          />
          <p className="text-red-500">{errorMsg}</p>
          <button className="bg-green-500 text-white">register</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
