import styled from "styled-components";

export const CategoryPreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Preview = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 20px;

  img {
    width: 350px;
  }
`;

export const ShopTitle = styled.h2`
  font-size: 28px;
  cursor: pointer;
  margin: 30px;
`;

// img {
//   width: 350px;
// }
