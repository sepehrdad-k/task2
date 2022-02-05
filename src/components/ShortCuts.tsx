import styled from "styled-components";
import { firstOptions, secondOptions, thirdOptions } from "./ShortcutSlider";

const ShortCuts = () => {
  return (
    <Container>
      {firstOptions.map((item) => (
        <Item>{item}</Item>
      ))}
      {secondOptions.map((item) => (
        <Item>{item}</Item>
      ))}
      {thirdOptions.map((item) => (
        <Item>{item}</Item>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: inherit;
  height: 40rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(6, 1fr);
  @media only screen and (min-width: 980px) {
    display: none;
  }
`;
const Item = styled.div`
  justify-self: center;
  align-self: center;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
`;

export default ShortCuts;
