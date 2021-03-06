import styled from "styled-components";

const SearchMode = () => {
  return <Overlap></Overlap>;
};

//styles
const Overlap = styled.div`
  position: fixed;
  inset: 0;
  z-index: 3;
  background-color: ${({ theme }) => theme.primary};
`;

export default SearchMode;
