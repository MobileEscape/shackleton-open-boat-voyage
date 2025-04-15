import Frame, { FrameProps } from "components/frames/frame";
import { FunctionComponent, lazy, useState, useContext } from "react";
import { AppContext } from "contexts/app";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import ShipInIce from "assets/Ship-in-ice.png";
import ShipInIceLoading from "assets/Ship-in-ice-loading.png";

import Border from "assets/Border-2.png";

import classNames from "classnames";
import MetaPuzzle from "components/meta-puzzle";

const MainButton = lazy(() => import("components/buttons/main-button"));

interface MainGameFrame extends FrameProps {}

const answers = [
  "saddle",
  "wright",
  "hums",
  "event",
  "hear",
  "ice",
  "onefinalmission",
];

const MainGameFrame: FunctionComponent<MainGameFrame> = ({ index }) => {
  const { setStep } = useContext(AppContext);

  return (
    <Frame index={index}>
      <div className="w-fit m-auto mt-[100px] items-center max-w-[90vw]">
        <div className="relative   p-4  my-4 rounded-md bg- ">
          <img
            src={Border}
            className="absolute max-w-[90vw] w-full h-full top-0 left-0"
          />

          <div
            className={classNames(
              "absolute max-w-[90vw] w-fit  top-0 left-0 transition duration-1000",
              "opacity-30"
            )}
          >
            <LazyLoadImage
              className="z-0"
              src={ShipInIce}
              placeholderSrc={ShipInIceLoading}
              effect="blur"
              alt=""
            />
          </div>
          <h1 className="relative text-center font-kingEdwards text-primary font-semibold text-5xl md:text-6xl z-10">
            Solve The Meta Puzzle
          </h1>

          <div className="flex flex-col w-fit p-4 items-center m-auto justify-center gap-4 my-4 md:my-12">
            <MetaPuzzle />
          </div>
          <div className="flex-grow basis-0 flex items-center justify-center flex-shrink-0  -mt-8 md:my-6 scale-90 mb-5 ">
            <MainButton
              text="Back"
              onClick={() => {
                setStep(4);
              }}
            />
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default MainGameFrame;
