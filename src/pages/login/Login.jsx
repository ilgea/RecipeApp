import { useState } from "react";
import imgLogin from "../../assets/meal2.svg";
import {
  LoginButton,
  LoginContainer,
  LoginDiv,
  LoginForm,
  LoginHeader,
  LoginImg,
  LoginInput,
} from "./Login.style";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../auth/firebase";
// import { useLoginContext } from "../../context/LoginProvider";
const Login = () => {
  // const { user, setUser } = useLoginContext();
  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");
  const navigate = useNavigate();

  // const { email, password } = user;
  // console.log("user", user);
  // console.log("email", email);
  // console.log("password", password);

  const handleSubmit = async (e) => {
    // submit butonuna tıkladığımızda sayfayı refresh yapmasını engelliyoruz. veriler tekrardan çekilmesin
    e.preventDefault();

    try {
      await signIn(email, password, navigate);
    } catch (error) {
      console.log(error.message);
    }
    // sessionStorage.setItem("email", email);
    // navigate(-1);
    // Aşağıdaki kodu çalıştırdığında submit ettiğin zaman bir önceki sayfaya gitmiyor.
    // setUser({
    //   email: "",
    //   password: "",
    // });
  };

  // const handleForm = (e) => {
  //   // console.log("ilk", e.target.value);
  //   setUser({ ...user, [e.target.id]: e.target.value });
  // };

  return (
    <LoginContainer>
      <LoginDiv>
        <LoginImg src={imgLogin} alt="" />
        <LoginHeader>Recipe App</LoginHeader>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="email"
            // id="email"
            name="email"
            // value={user?.email || ""}
            value={email}
            // onChange={handleForm}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <LoginInput
            type="password"
            // id="password"
            name="password"
            value={password}
            // onChange={handleForm}
            onChange={(e) => setPasword(e.target.value)}
            placeholder="******"
            required
          />
          <LoginButton type="submit">Login</LoginButton>
          {/* <input type="submit" value="Login" /> */}
        </LoginForm>
      </LoginDiv>
    </LoginContainer>
  );
};

export default Login;
