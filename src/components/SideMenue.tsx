import styled, { css } from "styled-components";
import SideMenuSlideDown from "./SideMenuSlideDown";
import { listItem1, listItem2 } from "../pages/Home";

const SideMenue = () => {
  return (
    <Container isClosed={false}>
      <Overlay></Overlay>
      <SideBar>
        <SideMenuSlideDown height="20rem" title="خودرو" items={listItem1} />
      </SideBar>
    </Container>
  );
};

const Container = styled.div<{ isClosed: boolean }>`
  width: 100%;
  height: 100%;
  ${({ isClosed }) =>
    isClosed &&
    css`
      display: none;
    `}
`;

const Overlay = styled.div`
  position: fixed;
  z-index: 5;
  inset: 0;
  background-color: black;
  opacity: 0.7;
`;

const SideBar = styled.div`
  height: 100vh;
  width: 17rem;
  background-color: ${({ theme }) => theme.mainColor};
  position: fixed;
  z-index: 6;
  right: 0;
  display: flex;
  flex-direction: column;
  /* @media only screen and (min-width: 980px) {
    display: none;
  } */
`;

export default SideMenue;
