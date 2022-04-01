import styled from "styled-components";

export const Flex = styled.div`
  padding: 50px 50px;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  max-width: 1400px;
  justify-content: center;
  align-items: flex-start;
  gap: 50px;
`;

export const NoFavouritesBoundary = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const NoFavouritesImage = styled.img`
  width: 35%;
`;