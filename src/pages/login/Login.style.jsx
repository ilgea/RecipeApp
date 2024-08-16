import styled from "styled-components";

export const LoginContainer = styled.div`
  height: calc(100vh - 60px);
  /* height: 100vh; */
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://cdn.pixabay.com/photo/2015/04/29/19/33/cookbook-746005_640.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  /* border: 2px solid red; */
`;

export const LoginDiv = styled.div`
  width: 30rem;
  height: 30rem;
  /* border-radius: 50%; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  /* border: 2px solid #e1f1dd; */
  /* background: rgba(0, 173, 181, 0.5); */
  /* border: 2px solid red; */
  margin-top: -2.5rem;
  /* From https://css.glass */
  background: rgba(240, 234, 234, 0.37);
  /* border-radius: 16px; */
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(3.1px);
  -webkit-backdrop-filter: blur(7.1px);
  border: 1px solid rgba(240, 234, 234, 0.27);
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 25rem;
    height: 25rem;
  }
`;

export const LoginImg = styled.img`
  width: 150px;
  margin: 1rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    width: 100px;
  }
`;

export const LoginHeader = styled.h1`
  color: rgb(23, 58, 50);
  font-size: 2.5rem;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 2rem;
  }
`;

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  /* background-color: aqua; */
`;

export const LoginInput = styled.input`
  height: 2.5rem;
  width: 15rem;
  margin: 1rem auto;
  /* input içerisindeki yazı için */
  text-indent: 1rem;
  font-size: 1.2rem;
  border-radius: 10px;
  border: none;
  background-color: rgb(43, 66, 61, 0.8);
  color: white;
  /* tıklandığında etrafında oluşan border'ı kaldırıyoruz */
  outline: none;
  &&::placeholder {
    color: rgb(255, 255, 255, 0.8);
    font-size: 1rem;
    font-style: italic;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1rem;
  }
`;

export const LoginButton = styled.button`
  font-size: 1.5rem;
  width: 15rem;
  height: 3rem;
  margin: 1rem;
  background-color: rgb(43, 66, 61, 0.9);
  color: white;
  border: none;
  border-radius: 10px;
  &&:hover {
    background-color: rgb(86, 131, 121);
  }
  &&:active {
    transform: scale(0.9);
  }
  cursor: pointer;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.3rem;
  }
`;
