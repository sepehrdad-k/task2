import styled from "styled-components";

const Home = () => {
  return (
    <HomeMain>
      <HomeHeader></HomeHeader>
    </HomeMain>
  );
};

//styles

const HomeMain = styled.main`
  width: 60rem;
  height: 100vh;
`;
const HomeHeader = styled.header`
  display: flex;
  justify-content: space-between;
`;

export default Home;
