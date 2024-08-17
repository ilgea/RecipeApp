import { useNavigate, useLocation } from "react-router-dom";
import { ContainerStyled } from "../globalStyles/Container.style";
import {
  DeneBurger,
  Hamburger,
  LinkDiv,
  LinkStyled,
  NavLeftTitle,
  NavStyled,
} from "./Navbar.style";
import { useLoginContext } from "../../context/LoginProvider";
import { logOut } from "../../auth/firebase";
import { useState } from "react";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useLoginContext();
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async () => {
    try {
      await logOut();
      localStorage.removeItem("recipes");
      navigate("/login");
    } catch (error) {
      console.error("Logout error:", error.message);
    }
  };
  // bir obje döndürür
  // console.log(location);
  // {
  //   hash: "";
  //   key: "ch621vbb";
  //   pathname: "/login";
  //   search: "";
  //   state: null;
  // }

  // "/login veya /register"
  // console.log(location.pathname);

  return (
    <ContainerStyled>
      <NavStyled>
        <NavLeftTitle
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        >
          Recipe App
        </NavLeftTitle>

        <Hamburger isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
          <DeneBurger isOpen={isOpen} />
        </Hamburger>

        <LinkDiv isOpen={isOpen} onClick={() => setIsOpen(false)}>
          <LinkStyled isOpen={isOpen} to="/">
            Home
          </LinkStyled>
          <LinkStyled isOpen={isOpen} to="/about">
            About
          </LinkStyled>

          {currentUser ? (
            <LinkStyled isOpen={isOpen} to="/login" onClick={handleLogout}>
              Logout
            </LinkStyled>
          ) : (
            <>
              {/* register sayfasında isen navbar'da login yazması için veya tam tersi */}
              {location.pathname !== "/login" && (
                <LinkStyled isOpen={isOpen} to="/login">
                  Login
                </LinkStyled>
              )}
              {location.pathname !== "/register" && (
                <LinkStyled isOpen={isOpen} to="/register">
                  Register
                </LinkStyled>
              )}
            </>
          )}
        </LinkDiv>
      </NavStyled>
    </ContainerStyled>
  );
};

export default Navbar;
