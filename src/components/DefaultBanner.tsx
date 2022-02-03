import styled from "styled-components";

const DefaultBanner = () => {
  return <Container></Container>;
};

const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: ${({ theme }) => theme.primary};
`;

export default DefaultBanner;
