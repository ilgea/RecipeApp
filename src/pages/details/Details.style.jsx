import styled from "styled-components";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const DetailHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1rem 0;
  background-color: ${({ theme }) => theme.colors.headerBgColor};
`;

export const DetailTitle = styled.h2``;

export const DietImg = styled.img`
  width: 200px;
  border-radius: 10px;
`;

export const DetailInfo = styled.div`
  display: flex;
  padding: 2rem;
  justify-content: space-around;
  align-items: start;
  /* background-color: aliceblue; */
  h3 {
    padding-bottom: 1rem;
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    flex-direction: column;
    row-gap: 1rem;
  }
`;

export const DetailImg = styled.img`
  /* width: 250px; */
  width: 100%;
  border-radius: 10px;
  vertical-align: middle;
`;

export const DetailIngred = styled.div`
  /* background-color: brown; */
`;

export const DetailButtonBack = styled.button`
  margin-left: auto;
  margin-right: 2rem;
  /* width: 200px; */
  width: 10rem;
  height: 40px;
  border: none;
  outline: none;
  /* background-color: #f0f0f0; */
  /* background-color: #dfd5d5; */
  background-color: rgb(158, 191, 252);
  border-radius: 20px;
  font-style: italic;
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &&:hover {
    background-color: rgba(158, 191, 252, 0.8);
  }
  &&:active {
    transform: scale(0.9);
  }
  @media (max-width: ${({ theme }) => theme.screens.lg}) {
    margin: 0 auto;
  }
`;
