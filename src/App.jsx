import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Cart from "./Components/Cart/Cart";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import NotFound from "./Components/NotFound/NotFound";

const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/" element={<ProtectedRoutes Component={Home} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
