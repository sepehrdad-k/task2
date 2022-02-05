import styled from "styled-components";
import {
  firstCarGroup,
  secondCarGroup,
  thirdCarGroup,
  fourthCarGroup,
  fifthCarGroup,
} from "./ContentSlider";

const Content = () => {
  return (
    <Container>
      <ItemWrapper>
        <ItemMarker>آ</ItemMarker>
        {firstCarGroup.map((car) => (
          <Item>{car}</Item>
        ))}
      </ItemWrapper>
      <ItemWrapper>
        <ItemMarker>ا</ItemMarker>
        {secondCarGroup.map((car) => (
          <Item>{car}</Item>
        ))}
      </ItemWrapper>
      <ItemWrapper>
        <ItemMarker>ب</ItemMarker>
        {thirdCarGroup.map((car) => (
          <Item>{car}</Item>
        ))}
      </ItemWrapper>
      <ItemWrapper>
        <ItemMarker>پ</ItemMarker>
        {fourthCarGroup.map((car) => (
          <Item>{car}</Item>
        ))}
      </ItemWrapper>
      <ItemWrapper>
        <ItemMarker>ت</ItemMarker>
        {fifthCarGroup.map((car) => (
          <Item>{car}</Item>
        ))}
      </ItemWrapper>
    </Container>
  );
};

const Container = styled.div`
  width: inherit;
  height: 40rem;
  @media only screen and (min-width: 980px) {
    display: none;
  }
`;
const ItemWrapper = styled.div`
  width: inherit;
  padding: 1rem;
  height: max-content;
  display: grid;
  grid-template-columns: 3rem 1fr 1fr 1fr;
`;
const ItemMarker = styled.div`
  grid-row: span 3;
  font-size: 1.6rem;
  color: teal;
`;
const Item = styled.div`
  height: 3rem;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  &:hover {
    color: teal;
  }
`;

export default Content;
