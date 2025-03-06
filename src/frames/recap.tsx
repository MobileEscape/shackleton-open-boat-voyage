import Frame, { FrameProps } from "components/frames/non-game-frame";
import { useNavigate } from "react-router-dom";
import { FunctionComponent, lazy } from "react";

const MainButton = lazy(() => import("components/buttons/main-button"));
interface HintImageProps extends FrameProps {}

const HintImageFrame: FunctionComponent<HintImageProps> = ({}) => {
  const navigate = useNavigate();

  return (
    <Frame>
      <div className="flex flex-col items-center mt-20 overflow-auto">
        <p className="text-xl my-8 font-frank mx-6 md:mx-16 max-w-[500px] [text-shadow:_0_1px_1px_rgb(0_0_0_/_20%)]">
          Ernest Shackleton attempted to cross the Antarctic Continent in 1914,
          but Mother Nature had other plans. Their ship, Endurance, was held
          fast in the ice and would remain so for the duration of the 1915
          Antarctic winter. The break-up of the ice that spring would prove
          fatal to the ship as she was slowly crushed and took on water.
          Shackleton ordered the crew to the ice where they would wait for
          months, drifting and meagerly surviving. Once the ice had broken up,
          Shackleton ordered the lifeboats to be launched and a harrowing,
          sleepless week commenced in which the crew narrowly survived the trip
          to Elephant Island. Once on land, Shackleton knew what he must do.
          <br />
          <br />
          Now, with five others, Shackleton plans to board the James Caird once
          again for an 800-mile voyage to South Georgia. Here he hopes to find
          help and rescue the remaining crew members.
        </p>
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
