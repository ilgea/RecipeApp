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
import { createUser } from "../../auth/firebase";
import { useState } from "react";
const Register = () => {
  // const { user, setUser } = useLoginContext();

  const [email, setEmail] = useState("");
  const [password, setPasword] = useState("");

  const navigate = useNavigate();
  //   const { email, password } = user;
  //   console.log("user", user);
  //   console.log("email", email);
  //   console.log("password", password);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(email, password, navigate);
    } catch (error) {
      console.log(error.message);
    }
    // console.log(email, password);
    // navigate(-1);
  };

  return (
    <LoginContainer>
      <LoginDiv>
        <LoginImg src={imgLogin} alt="" />
        <LoginHeader>Recipe App</LoginHeader>
        <LoginForm onSubmit={handleSubmit}>
          <LoginInput
            type="email"
            // name="email"
            // value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <LoginInput
            type="password"
            // name="password"
            // value={user?.password || ""}
            // value={password}
            onChange={(e) => setPasword(e.target.value)}
            placeholder="******"
            required
          />
          <LoginButton type="submit">Register</LoginButton>
          {/* <input type="submit" value="Register" /> */}
        </LoginForm>
      </LoginDiv>
    </LoginContainer>
  );
};

export default Register;
