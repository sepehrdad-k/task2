import styled from "styled-components";

interface IProps {
  itemName: string;
  listItems: string[];
}

const Dropdown = ({ itemName, listItems }: IProps) => {
  return (
    <Body>
      <Item>{itemName}</Item>
      <List>
        {listItems.map((item) => (
          <ListItem>{item}</ListItem>
        ))}
      </List>
    </Body>
  );
};
const Body = styled.div`
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
    ul {
      display: block;
    }
  }
`;
const Item = styled.div`
  color: ${({ theme }) => theme.textColor};
  height: 2rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  transition: background-color 300ms;
  position: relative;
`;
const List = styled.ul`
  position: absolute;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  display: none;
  list-style-type: none;
  background-color: ${({ theme }) => theme.primary};
`;
const ListItem = styled.li`
  color: ${({ theme }) => theme.textColor};
  width: 12rem;
  height: 3rem;
  padding-top: 1rem;
  padding-right: 1rem;
  transition: background-color 200ms;
  &:hover {
    background-color: #555;
  }
`;

export default Dropdown;
