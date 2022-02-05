import styled from "styled-components";

const DefaultBanner = () => {
  return <Container></Container>;
};

const Container = styled.div`
  width: inherit;
  height: inherit;
  background-color: ${({ theme }) => theme.primary};
  @media only screen and (max-width: 979px) {
    display: none;
  }
`;

export default DefaultBanner;
