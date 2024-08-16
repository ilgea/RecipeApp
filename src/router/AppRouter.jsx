import Navbar from "../components/navbar/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Login from "../pages/login/Login";
import Details from "../pages/details/Details";
import { GlobalStyles } from "../components/globalStyles/GlobalStyles";
import PrivateRouter from "./PrivateRouter";
import Register from "../pages/login/Register";
import { Toaster } from "react-hot-toast";

const AppRouter = () => {
  return (
    <BrowserRouter>
      {/* sıfırlama işlemlerini, genel ayarlarını GlobalStyle içerisinde yapıyoruz */}
      <GlobalStyles />
      {/* Route işlemlerinde görünmesini istediklerimizi */}
      {/* BrowserRouter'ın hemen altına Routes'ın dışına ekleriz. Burada Navbar. */}
      <Navbar />
      <Toaster
        position="top-right"
        containerStyle={{
          top: "60px",
        }}
      />
      <Routes>
        <Route path="/" element={<PrivateRouter />}>
          <Route path="" element={<Home />}></Route>
        </Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="register" element={<Register />}></Route>
        {/* bazı sayfaları sadece login olanlar görebilmesi için PriviteProvider kullanıyoruz */}
        <Route path="/about" element={<PrivateRouter />}>
          <Route path="" element={<About />}></Route>
        </Route>
        <Route path="details" element={<PrivateRouter />}>
          <Route path="" element={<Details />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
