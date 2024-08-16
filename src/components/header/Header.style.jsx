import styled from "styled-components";

export const HeaderStyled = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.headerBgColor};
  padding-bottom: 1rem;
  justify-content: center;
`;

export const HeaderTitle = styled.h2`
  margin: 0.5rem 0;
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    font-size: 1.2rem;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-wrap: wrap;
  row-gap: 0.5rem;
  justify-content: center;
  align-items: center;
  border: 1px solid white;
  margin: 0 auto;
  padding: 0.5rem;
  border-radius: 10px;
`;

export const FormInput = styled.input`
  padding: 0.5rem;
  margin-right: 0.5rem;
  border: none;
  outline: none;
  border: 1px solid rgba(146, 134, 134, 0.2);
  border-radius: 5px;
`;

export const FormButton = styled.button`
  margin-right: 0.5rem;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 5px;
  border: none;
  outline: none;
  border: 1px solid rgba(146, 134, 134, 0.2);
  cursor: pointer;
`;

export const FormSelect = styled.select`
  border-radius: 5px;
  border: none;
  outline: none;
  border: 1px solid rgba(146, 134, 134, 0.2);
  padding: 0.5rem;
`;
