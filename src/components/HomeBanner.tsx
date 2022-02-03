import ContentSlider from "./ContentSlider";
import ShortcutSlider from "./ShortcutSlider";
import Shasi from "./Shasi";
import PriceRange from "./PriceRange";
import DefaultBanner from "./DefaultBanner";
import { BannerContentType } from "../pages/Home";

const HomeBanner: React.FC<{ content: BannerContentType }> = ({ content }) => {
  if (content === "contentslider") {
    return <ContentSlider></ContentSlider>;
  } else if (content === "shortcutslider") {
    return <ShortcutSlider></ShortcutSlider>;
  } else if (content === "shasi") {
    return <Shasi></Shasi>;
  } else if (content === "price") {
    return <PriceRange></PriceRange>;
  } else {
    return <DefaultBanner></DefaultBanner>;
  }
};

export default HomeBanner;
