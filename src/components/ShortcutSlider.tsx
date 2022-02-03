import styled, { css } from "styled-components";
import { useState } from "react";

const firstOptions = [
  "صفر",
  "کم مصرف",
  " اقتصادی",
  "افرود",
  "هیبرید",
  "اقساطی",
  "8 سیلندر",
  "ژاپنی ها",
];
const secondOptions = [
  "وارداتی",
  "زیر1300cc",
  "لوکس",
  "کلاسیک",
  "اتوماتیک",
  "قابل معاوضه",
  "کره ای ها",
  "المانی ها",
];

const thirdOptions = [
  "مونتاژی",
  "داخلی",
  "دو دیفرانسیل",
  "منطقه ازاد",
  "بالای 2500cc",
  "دوگانه سوز",
  "6 سیلندر",
];
const ShortcutSlider = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const nextHandler = () => {
    if (slideNumber === 2) {
      setSlideNumber(0);
    } else {
      setSlideNumber((prevSlideNumber) => prevSlideNumber + 1);
    }
  };
  const prevHandler = () => {
    if (slideNumber === 0) {
      setSlideNumber(2);
    } else {
      setSlideNumber((prevSlideNumber) => prevSlideNumber - 1);
    }
  };
  return (
    <Window>
      <WindowTitle>از میانبرهای زیر انتخاب کنید</WindowTitle>
      <Slider slideNumber={slideNumber}>
        <Slide>
          {firstOptions.map((option) => (
            <SlideItem>{option}</SlideItem>
          ))}
        </Slide>
        <Slide>
          {secondOptions.map((option) => (
            <SlideItem>{option}</SlideItem>
          ))}
        </Slide>
        <Slide>
          {thirdOptions.map((option) => (
            <SlideItem>{option}</SlideItem>
          ))}
        </Slide>
      </Slider>
      <Controls>
        <Prev onClick={prevHandler}></Prev>
        <Next onClick={nextHandler}></Next>
      </Controls>
    </Window>
  );
};

//styles

const Controls = styled.div`
  width: 4rem;
  height: 3rem;
  position: absolute;
  bottom: 0;
  left: calc(50% - 2rem);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Next = styled.div`
  width: 1rem;
  height: 1rem;
  ${({ theme }) => css`
    border-bottom: 0.2rem solid ${theme.textColor};
    border-left: 0.2rem solid ${theme.textColor};
  `}
  transform: rotateZ(45deg);
  cursor: pointer;
`;
const Prev = styled.div`
  width: 1rem;
  height: 1rem;
  ${({ theme }) => css`
    border-top: 0.2rem solid ${theme.textColor};
    border-right: 0.2rem solid ${theme.textColor};
  `}
  transform: rotateZ(45deg);
  cursor: pointer;
`;
const Slider = styled.div<{ slideNumber: number }>`
  display: flex;
  width: 144rem;
  height: 20rem;
  transition: transform 300ms;
  ${({ slideNumber }) => css`
    transform: translateX(${slideNumber * 48}rem);
  `}
`;
const Slide = styled.div`
  width: 48rem;
  height: 20rem;
  padding-right: 5rem;
  padding-block: 3rem;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const SlideItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  font-size: 1.2rem;
  color: ${({ theme }) => theme.textColor};
  transition: color 200ms;
  cursor: pointer;
  &:hover {
    color: teal;
  }
`;

const Window = styled.div`
  width: 48rem;
  height: 25rem;
  position: relative;
  overflow: hidden;
`;
const WindowTitle = styled.div`
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.textColor};
`;

export default ShortcutSlider;
