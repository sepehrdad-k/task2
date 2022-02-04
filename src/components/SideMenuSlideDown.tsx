import styled, { css } from "styled-components";
import { useState } from "react";

interface IProps {
  height: string;
  items: string[];
  title: string;
}

const SideMenuSlideDown: React.FC<IProps> = ({ title, items, height }) => {
  const [mode, setMode] = useState(false);

  return (
    <Window height={height} isExtended={mode}>
      <Container height={height}>
        <Title onClick={() => setMode(!mode)}>{title}</Title>
        {items.map((item) => (
          <Item>{item}</Item>
        ))}
      </Container>
    </Window>
  );
};

const Window = styled.div<{ height: string; isExtended: boolean }>`
  height: 2rem;
  overflow: hidden;
  transition: height ease 400ms;
  ${({ isExtended, height }) =>
    isExtended &&
    css`
      height: ${height};
    `};
`;
const Container = styled.div<{ height: string }>`
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Title = styled.div`
  color: ${({ theme }) => theme.textColor};
  margin-right: 1rem;
  position: relative;
  cursor: pointer;
  &::after {
    content: "";
    position: absolute;
    left: 1rem;
    top: 0.4rem;
    width: 0.7rem;
    height: 0.7rem;
    transform: rotateZ(45deg);
    border-bottom: 0.2rem solid ${({ theme }) => theme.textColor};
    border-right: 0.2rem solid ${({ theme }) => theme.textColor};
  }
`;
const Item = styled.div`
  color: ${({ theme }) => theme.textColor};
  margin-right: 1rem;
`;
export default SideMenuSlideDown;
