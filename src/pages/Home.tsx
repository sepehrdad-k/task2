import styled from "styled-components";

const Home = () => {
  return (
    <Main>
      <Header>
        <HeaderItems>
          <Nav>
            <NavItem>خودرو</NavItem>
            <Vbar />
            <NavItem>موتورسیکلت</NavItem>
            <Vbar />
            <NavItem>باما</NavItem>
          </Nav>
          <SearchInput placeholder="جستجو" type="search"></SearchInput>
          <Login>
            <LoginItem>ورود</LoginItem>
            <Vbar />
            <LoginItem>ثبت اگهی</LoginItem>
          </Login>
          <Logo>bama.ir</Logo>
        </HeaderItems>
      </Header>
      <SideBar>
        <SideBarItem>میانبر</SideBarItem>
        <Hbar />
        <SideBarItem>برند</SideBarItem>
        <Hbar />
        <SideBarItem>شاسی</SideBarItem>
        <Hbar />

        <SideBarItem>قیمت</SideBarItem>
      </SideBar>
      <Banner></Banner>
    </Main>
  );
};

//styles

const Hbar = styled.div`
  width: 10rem;
  height: 0.1rem;
  background-color: ${({ theme }) => theme.textColor};
`;
const Vbar = styled.div`
  width: 0.1rem;
  height: 1rem;
  background-color: ${({ theme }) => theme.textColor};
`;

const Main = styled.main`
  width: 60rem;
  height: 100vh;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: 1fr 2.5fr 2fr;
  grid-template-areas:
    "header header"
    "sidebar banner"
    ". .";
`;
const Header = styled.header`
  width: inherit;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  grid-area: header;
  &::after {
    content: "";
    width: inherit;
    height: 0.05rem;
    background-color: ${({ theme }) => theme.textColor};
  }
`;
const HeaderItems = styled.div`
  width: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Nav = styled.nav`
  width: 12rem;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const NavItem = styled.div`
  color: ${({ theme }) => theme.textColor};
`;
const SearchInput = styled.input`
  width: 18rem;
  height: 2.5rem;
  padding: 1rem;
  margin-right: 1rem;
  border: none;
  background-color: ${({ theme }) => theme.primary};
  opacity: 0.5;
  border-radius: 0.3rem;
  ::placeholder {
    color: black;
    opacity: 1;
  }
  &:focus {
    outline: none;
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
  font-size: 1.6rem;
  color: ${({ theme }) => theme.textColor};
`;
const SideBar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  grid-area: sidebar;
`;
const SideBarItem = styled.div`
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  transition: color ease 300ms;
  &:hover {
    color: purple;
  }
`;
const Banner = styled.div`
  grid-area: banner;
`;
export default Home;
