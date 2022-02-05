import ContentSlider from "./ContentSlider";
import ShortcutSlider from "./ShortcutSlider";
import ShortCuts from "./ShortCuts";
import Content from "./Content";
import Shasi from "./Shasi";
import PriceRange from "./PriceRange";
import DefaultBanner from "./DefaultBanner";
import { BannerContentType } from "../pages/Home";

const HomeBanner: React.FC<{ content: BannerContentType }> = ({ content }) => {
  if (content === "contentslider") {
    return (
      <>
        <ContentSlider></ContentSlider>
        <Content></Content>
      </>
    );
  } else if (content === "shortcutslider") {
    return (
      <>
        <ShortcutSlider></ShortcutSlider>
        <ShortCuts></ShortCuts>
      </>
    );
  } else if (content === "shasi") {
    return <Shasi></Shasi>;
  } else if (content === "price") {
    return <PriceRange></PriceRange>;
  } else {
    return (
      <>
        <DefaultBanner></DefaultBanner>
        <ShortCuts></ShortCuts>
      </>
    );
  }
};

export default HomeBanner;
