import styled, { css } from "styled-components";
import SearchMode from "../components/SearchMode";
import Dropdown from "../components/Dropdown";
import { useState } from "react";
import HomeBanner from "../components/HomeBanner";
import SideMenue from "../components/SideMenue";

export const listItem1 = [
  "خرید خودرو",
  "ثبت اگهی خودرو",
  "قیمت روز خودرو",
  "اخبار خودرو",
  "مشخصات فنی خودرو",
  "گوش به زنگ خودرو",
  "کمپانی های خودرو",
];
export const listItem2 = [
  "خرید موتورسیکلت",
  "ثبت اگهی موتورسیکلت",
  "اخبار موتورسیکلت",
  "گوش به زنگ موتورسیکلت",
];
export const listItem3 = [
  "ثبت نام نمایشگاه",
  "تماس باما",
  "تبلیغات شرکت ها",
  "قوانین سایت",
  "فرصت های شغلی",
  "درباره ما",
];

export type BannerContentType =
  | "shortcutslider"
  | "contentslider"
  | "default"
  | "shasi"
  | "price";

const Home: React.FC<{
  themeToggler: React.Dispatch<React.SetStateAction<boolean>>;
}> = ({ themeToggler }) => {
  const [isSearchMode, setIsSearchMode] = useState(false);
  const [isMenuClosed, setIsMenuClosed] = useState(true);
  const [bannerContent, setBannerContent] =
    useState<BannerContentType>("default");

  return (
    <Main>
      {isSearchMode ? <SearchMode /> : null}
      {isSearchMode ? (
        <SearchModeToggler onClick={() => setIsSearchMode(false)}>
          <div></div>
          <div></div>
        </SearchModeToggler>
      ) : null}
      <SideMenue isclosed={isMenuClosed} setIsClosed={setIsMenuClosed} />
      <Container>
        <MobileHeader>
          <Logo>Bama.ir</Logo>
          <Options>
            <HambergurMenue onClick={() => setIsMenuClosed(false)}>
              <div></div>
              <div></div>
              <div></div>
            </HambergurMenue>
            <MobileButton>ثبت اگهی</MobileButton>
            <ThemeToggler onClick={() => themeToggler((prev) => !prev)}>
              تغییر تم
            </ThemeToggler>
          </Options>
          <SearchInput
            onClick={() => setIsSearchMode(true)}
            searchmode={isSearchMode}
            placeholder={isSearchMode ? undefined : "جستجو"}
            type="search"
          />
        </MobileHeader>
        <Header>
          <HeaderItems>
            <Nav>
              <ThemeToggler onClick={() => themeToggler((prev) => !prev)}>
                تغییر تم
              </ThemeToggler>
              <Dropdown itemName="خودرو" listItems={listItem1} />
              <Vbar />
              <Dropdown itemName="مونورسیکلت" listItems={listItem2} />
              <Vbar />
              <Dropdown itemName="باما" listItems={listItem3} />
            </Nav>
            <SearchInput
              onClick={() => setIsSearchMode(true)}
              searchmode={isSearchMode}
              placeholder={isSearchMode ? undefined : "جستجو"}
              type="search"
            />
            <Login>
              <LoginItem>ورود</LoginItem>
              <Vbar />
              <LoginItem>ثبت اگهی</LoginItem>
            </Login>
            <Logo>bama.ir</Logo>
          </HeaderItems>
        </Header>
        <SideBar>
          <SideBarItemWrapper>
            <SideBarItem onClick={() => setBannerContent("shortcutslider")}>
              میانبر
            </SideBarItem>
            <SideBarToggler
              mode={bannerContent}
              desiredMode="shortcutslider"
              onClick={() => setBannerContent("default")}
            >
              <div></div>
              <div></div>
            </SideBarToggler>
          </SideBarItemWrapper>
          <Hbar />
          <SideBarItemWrapper>
            <SideBarItem onClick={() => setBannerContent("contentslider")}>
              برند
            </SideBarItem>
            <SideBarToggler
              mode={bannerContent}
              desiredMode="contentslider"
              onClick={() => setBannerContent("default")}
            >
              <div></div>
              <div></div>
            </SideBarToggler>
          </SideBarItemWrapper>
          <Hbar />
          <SideBarItemWrapper>
            <SideBarItem onClick={() => setBannerContent("shasi")}>
              شاسی
            </SideBarItem>
            <SideBarToggler
              mode={bannerContent}
              desiredMode="shasi"
              onClick={() => setBannerContent("default")}
            >
              <div></div>
              <div></div>
            </SideBarToggler>
          </SideBarItemWrapper>
          <Hbar />
          <SideBarItemWrapper>
            <SideBarItem onClick={() => setBannerContent("price")}>
              قیمت
            </SideBarItem>
            <SideBarToggler
              mode={bannerContent}
              desiredMode="price"
              onClick={() => setBannerContent("default")}
            >
              <div></div>
              <div></div>
            </SideBarToggler>
          </SideBarItemWrapper>
        </SideBar>
        <Banner>
          <HomeBanner content={bannerContent}></HomeBanner>
        </Banner>
      </Container>
    </Main>
  );
};

//styles

const Hbar = styled.div`
  width: 10rem;
  height: 0.2rem;
  background-color: ${({ theme }) => theme.textColor};
`;
const Vbar = styled.div`
  width: 0.175rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.textColor};
`;
const Main = styled.main`
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 979px) {
    width: 100vw;
  }
`;

const Container = styled.div`
  width: 60rem;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 2.5fr 2fr;
  grid-template-areas:
    "header header"
    "sidebar banner"
    ". .";
  @media only screen and (max-width: 979px) {
    width: 100vw;
    grid-template-columns: 1fr;
    grid-template-rows: 8rem 7rem 1fr;
    grid-template-areas: "mobileheader" "mobilenav" "banner";
  }
`;
const Header = styled.header`
@media only screen and (max-width: 979px) {
  display:none;
}
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-area: header;
  &::after {
    content: "";
    width: inherit;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.textColor};
  }
  media
`;
const HeaderItems = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.nav`
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const SearchInput = styled.input<{ searchmode: boolean }>`
  position: relative;
  z-index: 4;
  width: 18rem;
  height: 2.5rem;
  padding: 1rem;
  margin-bottom: 1rem;
  margin-right: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  opacity: 0.5;
  border-radius: 0.3rem;
  ::placeholder {
    color: ${({ theme }) => theme.textColor};
    opacity: 1;
  }
  &:focus {
    outline: none;
  }
  transition: all 500ms;
  ${({ searchmode }) =>
    searchmode &&
    css`
      @media only screen and (max-width: 979px) {
        transform: translateY(-2rem);
      }
      width: 27rem;
      transform: translateX(10rem);
      background-color: white;
    `}
  @media only screen and (max-width: 979px) {
    transition: none;
    grid-area: search;
    justify-self: center;
    align-self: center;
    width: 80vw;
  }
`;
const Login = styled.div`
  width: 9rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LoginItem = styled.div`
  padding: 0.2rem 0.6rem;
  color: ${({ theme }) => theme.textColor};
  transition: background-color ease 300ms;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) => theme.primary};
  }
`;
const Logo = styled.div`
  font-family: "sans-serif";
  position: relative;
  z-index: 4;
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textColor};
  @media only screen and (max-width: 979px) {
    color: #369736;
    grid-area: logo;
    justify-self: end;
    align-self: center;
    font-size: 2rem;
    margin-left: 1rem;
    z-index: 2;
  }
`;
const SideBar = styled.div`
  @media only screen and (max-width: 979px) {
    display: none;
  }
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  grid-area: sidebar;
`;
const SideBarItemWrapper = styled.div`
  width: 5rem;
  display: flex;
  justify-content: space-between;
`;
const SideBarItem = styled.div`
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  transition: color ease 300ms;
  &:hover {
    color: purple;
  }
`;
const SideBarToggler = styled.div<{
  mode: BannerContentType;
  desiredMode: BannerContentType;
}>`
  ${({ mode, desiredMode }) => {
    if (mode !== desiredMode) {
      return css`
        display: none;
      `;
    }
  }}
  width: 1rem;
  height: 1rem;
  &:hover {
    div {
      background-color: teal;
    }
  }
  cursor: pointer;
  div {
    width: 1rem;
    height: 0.1rem;
    background-color: ${({ theme }) => theme.textColor};
    transition: background-color 200ms;
  }
  div:first-child {
    transform: translateY(0.05rem) rotateZ(45deg);
  }
  div:last-child {
    transform: translateY(-0.05rem) rotateZ(-45deg);
  }
`;
const Banner = styled.div`
  width: 48rem;
  height: 25rem;
  grid-area: banner;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 979px) {
    width: 100vw;
    height: 50rem;
  }
`;
const SearchModeToggler = styled.div`
  position: relative;
  z-index: 4;
  width: 2.5rem;
  height: 2rem;
  position: fixed;
  top: 4.5%;
  right: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  div {
    width: 2.5rem;
    height: 0.2rem;
    background-color: #212121;
  }
  div:first-child {
    transform: translateY(0.5rem) rotateZ(45deg);
  }
  div:last-child {
    transform: translateY(-0.5rem) rotateZ(-45deg);
  }
`;
const ThemeToggler = styled.button`
  border: none;
  width: 5rem;
  height: 2rem;
  margin-left: 1rem;
  border-radius: 0.3rem;
  background-color: ${({ theme }) => theme.textColor};
  color: ${({ theme }) => theme.mainColor};
  cursor: pointer;
`;

const MobileHeader = styled.header`
  display: grid;
  grid-template-columns: 17rem 1fr;
  grid-template-rows: 1fr 1fr;
  grid-template-areas:
    "options logo"
    "search search";
  @media only screen and (min-width: 980px) {
    display: none;
  }
`;
const Options = styled.div`
  width: 17rem;
  height: 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const HambergurMenue = styled.div`
  margin-right: 1rem;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  cursor: pointer;
  div {
    width: inherit;
    height: 0.25rem;
    background-color: ${({ theme }) => theme.textColor};
  }
`;
const MobileButton = styled.button`
  width: 6rem;
  padding: 0.2rem;
  border-radius: 0.2rem;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.textColor};
  background-color: ${({ theme }) => theme.primary};
`;

export default Home;
