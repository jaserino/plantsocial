import styled from "styled-components";

export const CheckoutContainer = styled.div`
  min-height: 90vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0px 100px 0px 100px;
`;

export const CheckoutHeader = styled.div`
  width: 100%;
  padding: 10px 0;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid darkgrey;
`;

export const CheckoutTitle = styled.div`
  text-transform: capitalize;
  width: 23%;
  font-weight: bold;
  color: #55b43d;

  &:last-child {
    width: 8%;
  }
`;

export const Total = styled.span`
  margin-top: 30px;
  margin-left: auto;
  font-size: 36px;
`;

export const CheckoutName = styled.h1`
  font-size: 3em;
  color: #55b43d;
  font-weight: bold;
  font-family: "Permanent Marker";
`;
