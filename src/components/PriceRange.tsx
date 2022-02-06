import styled from "styled-components";

const prices = [
  "10 تا 50 ملیون",
  "50 تا 70 ملیون",
  "70 تا 100 ملیون",
  "100 تا 130 ملیون",
  "130 تا 150 ملیون",
  "150 تا 200 ملیون",
  "200 تا 250 ملیون",
  "250 تا 300 ملیون",
  "300 تا 350 ملیون",
  "350 تا 400 ملیون",
  "400 تا 500 ملیون",
  "500 تا 600 ملیون",
  "600 تا 800 ملیون",
  "800 تا 1000 ملیون",
  "1 تا 1.5 ملیارد",
  "1.5 ملیارد به بالا",
];

const PriceRange = () => {
  return (
    <Container>
      <Title>از قیمت های زیر انتخاب کنید</Title>
      <ItemWrapper>
        {prices.map((price) => (
          <Item>{price}</Item>
        ))}
      </ItemWrapper>
    </Container>
  );
};

const Container = styled.div`
  height: 25rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;
const Title = styled.div`
  height: 2rem;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textColor};
  @media only screen and (max-width: 979px) {
    display: none;
  }
`;
const ItemWrapper = styled.div`
  height: 20rem;
  padding: 4rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  @media only screen and (max-width: 979px) {
    grid-template-columns: repeat(auto-fit, 9rem);
  }
`;
const Item = styled.div`
  width: max-content;
  height: 2rem;
  padding: 0.5rem;
  margin-bottom: 0.2rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  border: 0.15rem solid rgba(0, 128, 128, 0);
  transition: border 300ms;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  &:hover {
    border: 0.15rem solid rgba(0, 128, 128, 0.8);
  }
`;
export default PriceRange;
