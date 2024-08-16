import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  /* justify-content: center; */
  /* align-items: center; */
  /* justify-content: ${({ justify }) => (justify ? justify : "center")}; */
  /* align-items: ${({ align }) => (align ? align : "center")}; */
  justify-content: ${({ justify }) => (justify ? justify : "")};
  align-items: ${({ align }) => (align ? align : "")};
  flex-direction: ${({ direction }) => (direction ? direction : "row")};
  flex-wrap: ${({ wrap }) => wrap && wrap};
`;
