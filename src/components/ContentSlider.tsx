import styled, { css } from "styled-components";
import { useState } from "react";

export const firstCarGroup = ["آئودی", "آلفارومئو", "آریا", "آمیکو"];
export const secondCarGroup = [
  "اپل",
  "الدزمبیل",
  "ام وی ام",
  "ام جی",
  "اینفینیتی",
  "اسمارت",
  "ایسوزو",
  "اس دبلیو ام",
];
export const thirdCarGroup = [
  "ب ام و",
  "بیوک",
  "بنز",
  "بسترن",
  "بایک",
  "برلیانس",
  "بی وای دی",
  "بورگوارد",
  "بیسو",
];

export const fourthCarGroup = [
  "پاژن",
  "پراید",
  "پروتون",
  "پورشه",
  "پژو",
  "پیکان",
];

export const fifthCarGroup = ["تویوتا", "تیبا", "تارا"];

const ContentSlider = () => {
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
      <Slider slideNumber={slideNumber}>
        <Slide>
          <SlideTitle>آ</SlideTitle>
          {firstCarGroup.map((car) => (
            <SlideItem>{car}</SlideItem>
          ))}
          <SlideTitle>ا</SlideTitle>
          {secondCarGroup.map((car) => (
            <SlideItem>{car}</SlideItem>
          ))}
          <SlideTitle>ب</SlideTitle>
          {thirdCarGroup.map((car) => (
            <SlideItem>{car}</SlideItem>
          ))}
        </Slide>
        <Slide>
          <SlideTitle>پ</SlideTitle>
          {fourthCarGroup.map((car) => (
            <SlideItem>{car}</SlideItem>
          ))}
        </Slide>
        <Slide>
          <SlideTitle>ت</SlideTitle>
          {fifthCarGroup.map((car) => (
            <SlideItem>{car}</SlideItem>
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
  height: 25rem;
  transition: transform 300ms;
  ${({ slideNumber }) => css`
    transform: translateX(${slideNumber * 48}rem);
  `}
`;
const Slide = styled.div`
  width: 48rem;
  height: 25rem;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;
const SlideTitle = styled.div`
  font-size: 1.3rem;
  width: 2.5rem;
  height: 1rem;
  margin-bottom: 0.5rem;
  color: teal;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    right: -0.3rem;
    bottom: 0;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background-color: teal;
  }
`;
const SlideItem = styled.div`
  width: max-content;
  height: 2rem;
  padding: 0.5rem;
  margin-bottom: 0.2rem;
  border-radius: 0.2rem;
  display: flex;
  align-items: center;
  border: 0.15rem solid rgba(0, 128, 128, 0);
  transition: border 300ms;
  color: ${({ theme }) => theme.textColor};
  cursor: pointer;
  &:hover {
    border: 0.15rem solid rgba(0, 128, 128, 0.8);
  }
`;

const Window = styled.div`
  width: 48rem;
  height: 25rem;
  position: relative;
  overflow: hidden;
  @media only screen and (max-width: 979px) {
    display: none;
  }
`;

export default ContentSlider;
