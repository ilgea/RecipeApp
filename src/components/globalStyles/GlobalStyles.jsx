import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: ${({ theme }) => theme.font.poppins};
    }

    html{
  background-color: ${({ theme }) => theme.colors.mainBgColor};
    }
    
    .toastContainer{
      width: 10rem;
      font-size: .9rem;
    }
`;
