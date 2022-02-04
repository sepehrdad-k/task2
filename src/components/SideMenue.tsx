import styled, { css } from "styled-components";
import SideMenuSlideDown from "./SideMenuSlideDown";
import { listItem1, listItem2 } from "../pages/Home";

const SideMenue = () => {
  return (
    <Container isClosed={false}>
      <Overlay></Overlay>
      <SideBar>
        <SideBarHeader>
          <Toggler>
            <div></div>
            <div></div>
          </Toggler>
          <Logo>Bama.ir</Logo>
        </SideBarHeader>
        <Item>ورود | ثبت نام</Item>
        <Item>ثبت اگهی</Item>
        <SideMenuSlideDown height="20rem" title="خودرو" items={listItem1} />
        <SideMenuSlideDown
          height="13rem"
          title="موتورسیکلت"
          items={listItem2}
        />
        <Item>ثبت انم نمایشگاه</Item>
        <Item>تماس با ما</Item>
        <Item>تبلیغات شرکت ها </Item>
        <Item>قوانین سایت</Item>
        <Item>فرصت های شغلی</Item>
        <Item>درباره ما</Item>
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
  overflow: hidden;
  overflow-y: scroll;
`;
const SideBarHeader = styled.div`
  width: 17rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin-bottom: 1rem;
`;
const Logo = styled.div`
  font-size: 1.5rem;
  color: #369736;
  margin-left: 0.5rem;
`;
const Toggler = styled.div`
  width: 3rem;
  height: 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div {
    background-color: ${({ theme }) => theme.textColor};
    width: 2rem;
    height: 0.2rem;
  }
  div:first-child {
    transform: translateY(0.1rem) rotateZ(45deg);
  }
  div:last-child {
    transform: translateY(-0.1rem) rotateZ(-45deg);
  }
`;
const Item = styled.div`
  width: 17rem;
  height: 3rem;
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export default SideMenue;
