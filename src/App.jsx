import PublicRoutes from "./routes/PublicRoutes";
import PrivateRoutes from "./routes/PrivateRoutes";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

const App = () => {
  const {isAuth} = useContext(AuthContext)
  return <div>{isAuth ? <PrivateRoutes /> : <PublicRoutes />}</div>;
};

export default App;
