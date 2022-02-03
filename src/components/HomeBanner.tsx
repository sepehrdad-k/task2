import styled from "styled-components";
import ContentSlider from "./ContentSlider";
import ShortcutSlider from "./ShortcutSlider";
import { BannerContentType } from "../pages/Home";

const HomeBanner: React.FC<{ content: BannerContentType }> = ({ content }) => {
  if (content === "contentslider") {
    return (
      <Body>
        <ContentSlider></ContentSlider>
      </Body>
    );
  } else if (content === "shortcutslider") {
    return (
      <Body>
        <ShortcutSlider></ShortcutSlider>
      </Body>
    );
  } else {
    return <h1>helllloooo</h1>;
  }
};

//styles

const Body = styled.div`
  width: inherit;
  height: inherit;
`;

export default HomeBanner;
