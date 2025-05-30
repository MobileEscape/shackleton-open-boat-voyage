import Frame, { FrameProps } from "components/frames/non-game-frame";
import { useNavigate, useLocation } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { FunctionComponent, lazy } from "react";
import OctagonVideo from "components/framingvideo";
import "react-lazy-load-image-component/src/effects/blur.css";

import CairdAssemble from "assets/Hint-Images/CairdAssemble.mp4";
import NewspaperSolution from "assets/Hint-Images/NewspaperSolution.jpg";
import PaletteSolution from "assets/Hint-Images/PaletteSolution.png";
import Sextant from "assets/Hint-Images/Sextant.mp4";
import SightingTable from "assets/Hint-Images/SightingTable.jpg";
import SolutionOrder from "assets/Hint-Images/SolutionOrder.jpg";
import SolutionsComplete from "assets/Hint-Images/SolutionsComplete.jpg";
import SolutionsDeletions from "assets/Hint-Images/SolutionsDeletions.jpg";

const MainButton = lazy(() => import("components/buttons/main-button"));
interface HintImageProps extends FrameProps {}

const HintImageFrame: FunctionComponent<HintImageProps> = ({}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const hintImages = [
    {
      title: "CairdAssemble",
      image: CairdAssemble,
    },
    {
      title: "NewspaperSolution",
      image: NewspaperSolution,
    },
    {
      title: "PaletteSolution",
      image: PaletteSolution,
    },
    {
      title: "Sextant",
      image: Sextant,
    },
    {
      title: "SightingTable",
      image: SightingTable,
    },
    {
      title: "SolutionOrder",
      image: SolutionOrder,
    },
    {
      title: "SolutionsComplete",
      image: SolutionsComplete,
    },
    {
      title: "SolutionsDeletions",
      image: SolutionsDeletions,
    },
  ];

  const param = new URLSearchParams(location.search).get("image");
  const image = hintImages.filter((x) => x.title === param)[0].image;

  if (image.includes(".mp4"))
    return (
      <Frame>
        <div className="flex flex-col justify-center items-center h-screen w-screen">
          <OctagonVideo
            src={image}
            className="w-full max-w-[90%] m-auto"
            autoPlay
            triggerPlay={true}
            subtitles={[]}
            loop
            muted
            playsInline
            controls={false}
            onEnded={() => {
              navigate(-1);
            }}
          />
          <MainButton
            onClick={() => navigate(-1)}
            className="mx-auto mt-8 w-[300px] scale-90"
            text="Back"
          />
        </div>
      </Frame>
    );

  return (
    <Frame>
      <div className="flex flex-col justify-center items-center h-screen w-screen">
        <LazyLoadImage
          src={image}
          placeholderSrc={image}
          effect="blur"
          className="w-full max-w-[90%] m-auto"
        />
        <MainButton
          onClick={() => navigate(-1)}
          className="mx-auto mt-8 w-[300px] scale-90"
          text="Back"
        />
      </div>
    </Frame>
  );
};

export default HintImageFrame;
