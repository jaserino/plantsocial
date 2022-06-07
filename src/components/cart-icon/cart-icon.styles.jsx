import styled from "styled-components";

import { ReactComponent as ShoppingSvg } from "../../assets/plant-cart.svg";

export const CartIconContainer = styled.div`
  width: 50px;
  height: 50px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const ShoppingIcon = styled(ShoppingSvg)`
  width: 35px;
  height: 35px;
`;

export const ItemCount = styled.div`
  position: absolute;
  font-size: 15px;
  font-weight: bold;
  bottom: 8px;
`;
