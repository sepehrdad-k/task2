import styled from "styled-components";

const items = ["سدان", "شاسی بلند", "کروک", "کوپه", "وانت", "ون", "هاچبک"];

const Shasi = () => {
  return (
    <Container>
      {items.map((item) => (
        <Item>{item}</Item>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding-right: 5rem;
  padding-block: 3rem;
  height: 25rem;
`;
const Item = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textColor};
  transition: color 200ms;
  cursor: pointer;
  &:hover {
    color: teal;
  }
`;
export default Shasi;
