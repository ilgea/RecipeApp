import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
`;

export const CardStyle = styled.div`
  width: 20rem;
  height: 20rem;
  /* border: 1px solid red; */
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  box-shadow: rgba(100, 149, 237, 0.2) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const CardTitle = styled.h4`
  text-align: center;
  font-size: 1.2rem;
  height: 4rem;
  display: inline-flex;
  align-items: center;
`;

export const CardImg = styled.img`
  width: 50%;
  height: 10rem;
  /* object-fit: cover; */
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 10px 15px 2px;

  &&:hover {
    transform: scale(1.1);
    /* transition: transform 0.3s ease-in-out; */
  }
`;

export const CardButton = styled.button`
  width: 50%;
  height: 2rem;
  border: none;
  outline: none;
  /* background-color: #f0f0f0; */
  /* background-color: #dfd5d5; */
  background-color: rgb(158, 191, 252);
  border-radius: 20px;
  font-style: italic;
  font-size: 1.1rem;
  transition: all 0.2s ease-in-out;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px 2px;
  cursor: pointer;
  &&:hover {
    background-color: rgba(158, 191, 252, 0.8);
  }
  &&:active {
    transform: scale(0.9);
  }
`;
