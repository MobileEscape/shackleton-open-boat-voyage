import Frame, { FrameProps } from "components/frames/non-game-frame";
import { useNavigate, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FunctionComponent, lazy } from "react";
import "react-lazy-load-image-component/src/effects/blur.css";
import Brush from "assets/contents/Brush.png";
import FlowCard from "assets/contents/FlowCard.png";
import Increments from "assets/contents/Increments.png";
import Linocut from "assets/contents/Linocut.png";
import Map from "assets/contents/Map.png";
import NewsPaper from "assets/contents/NewsPaper.png";
import Pages from "assets/contents/Pages.png";
import Pallet from "assets/contents/Pallet.png";
import Rime from "assets/contents/Rime.png";
import Sextant from "assets/contents/Sextant.png";
import Sightings from "assets/contents/Sightings.png";
import Wuzzle from "assets/contents/Wuzzle.png";

const MainButton = lazy(() => import("components/buttons/main-button"));
interface OurApologiesProps extends FrameProps {}

const getHelp = [
  {
    image: Map,
    loading: Map,
    title: "Haakon Bay Map",
    text: `Your envelope should have a map. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Brush,
    loading: Brush,
    title: "Paint Brush",
    text: `Your envelope should have a Artist's Brush. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Pallet,
    loading: Pallet,
    title: "Painter's Pallet",
    text: `Your envelope should have a Painter's Pallet. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Sightings,
    loading: Sightings,
    title: "Sightings Table",
    text: `Your envelope should have Sightings table. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },

  {
    image: Increments,
    loading: Increments,
    title: "Increments and Corrections Chart",
    text: `Your envelope should have an Increments and Corrections Chart. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Pages,
    loading: Pages,
    title: "5 Journal Pages",
    text: `Your envelope should have 5 Journal Pages. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },

  {
    image: Sextant,
    loading: Sextant,
    title: "Sextant Tool",
    text: `Your envelope should have a Sextant tool. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Wuzzle,
    loading: Wuzzle,
    title: "Wuzzle",
    text: `Your envelope should have a Wuzzle Puzzle. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: Linocut,
    loading: Linocut,
    title: "Sky Linocut",
    text: `Your envelope should have a Sky Linocut. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
  {
    image: NewsPaper,
    loading: NewsPaper,
    title: "NewsPaper Clipping",
    text: `Your envelope should have a NewsPaper Clipping. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },

  {
    image: Rime,
    loading: Rime,
    title: "Rime of the Mariner",
    text: `Your envelope should have a Rime of the Mariner. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },

  {
    image: FlowCard,
    loading: FlowCard,
    title: "Flow Card",
    text: `Your envelope should have a Flow Card. If you're missing this item please contact <a style="color:darkblue" href="mailto:info@theescapemail.com" target="_blank">info@theescapemail.com</a> and we'll help make it right.`,
  },
];

const OurApologiesFrame: FunctionComponent<OurApologiesProps> = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const index: number = Number(
    new URLSearchParams(location.search).get("index")
  );

  return (
    <Frame>
      <div className="flex flex-col w-[300px] m-auto mt-[100px] h-[30px] items-center">
        <LazyLoadImage
          src={getHelp[index].image}
          placeholderSrc={getHelp[index].loading}
          effect="blur"
          className="max-h-[30vh]"
        />
        <h1 className="text-center font-mrsEaves font-semibold text-5xl my-8">
          {getHelp[index].title}
        </h1>
        <p
          id="text"
          className=" font-mrsEaves font-regular text-2xl text-left"
          dangerouslySetInnerHTML={{ __html: getHelp[index].text }}
        />

        <div className="flex-grow basis-0 flex items-center justify-center flex-shrink-0 mt-10 scale-75 ">
          <MainButton text="Back" onClick={() => navigate(-1)}></MainButton>
        </div>
      </div>
    </Frame>
  );
};

export default OurApologiesFrame;
