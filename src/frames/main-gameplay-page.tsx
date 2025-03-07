import Frame, { FrameProps } from "components/frames/frame";
import {
  FunctionComponent,
  lazy,
  useContext,
  useState,
  useEffect,
} from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import SolutionPage from "assets/SolutionPage.jpg";
import Icon1 from "assets/icons/CHART.png";
import Icon2 from "assets/icons/NEWS.png";
import Icon3 from "assets/icons/PAINT.png";
import Icon4 from "assets/icons/SEXTANT.png";
import Icon5 from "assets/icons/WUZZLE.png";

import CastleLoading from "assets/Background Images/Castle-Loading.png";
import Castle from "assets/Background Images/Castle.png";
import IcefieldLoading from "assets/Background Images/Icefield-Loading.png";
import Icefield from "assets/Background Images/Icefield.png";
import PenguinLoading from "assets/Background Images/Penguin-Loading.png";
import Penguin from "assets/Background Images/Penguin.png";
import PolaroidLoading from "assets/Background Images/Polaroid-Loading.png";
import Polaroid from "assets/Background Images/Polaroid.png";
import SealLoading from "assets/Background Images/Seal-Loading.png";
import Seal from "assets/Background Images/Seal.png";
import ShipInIceLoading from "assets/Ship-in-ice-loading.png";
import ShipInIce from "assets/Ship-in-ice.png";

import Border from "assets/Border-2.png";
import PuzzleField from "components/puzzle-fields";
import classNames from "classnames";

import { AppContext } from "contexts/app";

const MainButton = lazy(() => import("components/buttons/main-button"));

const Icons = [Icon1, Icon2, Icon3, Icon4, Icon5];

interface MainGameFrame extends FrameProps {}

const answers = [
  "risky",
  "permission",
  "rinse",
  "finale",
  "honest",
  "onefinalmission",
];

const givenLetters = [
  ["", "", "", "", ""],
  ["", "", "", "", "", "", "", "", "", "N"],
  ["", "", "", "", ""],
  ["", "", "", "", "", ""],
  ["H", "", "", "", "", ""],
];

const backgroundImage: any = {
  risky: [Seal, SealLoading],
  permission: [Penguin, PenguinLoading],
  rinse: [Castle, CastleLoading],
  finale: [Polaroid, PolaroidLoading],
  honest: [Icefield, IcefieldLoading],
  onefinalmission: [ShipInIce, ShipInIceLoading],
};

const MainGameFrame: FunctionComponent<MainGameFrame> = ({ index }) => {
  const { advance } = useContext(AppContext);
  const [bgImage, setbgImage] = useState("");
  const [solved, setSolved] = useState(0);
  const [visible, setVisible] = useState("hidden bg-black/0 opacity-0");

  const changeImage = (answer: string) => {
    if (bgImage === answer) return;
    setbgImage("");
    setTimeout(() => setbgImage(answer), 500);
  };

  useEffect(() => {
    if (solved == 5) {
      setVisible("");
      setTimeout(() => setVisible("bg-black/80 opacity-100"), 100);
    }
  }, [solved]);

  return (
    <Frame index={index}>
      <div className="w-fit m-auto mt-[100px] items-center max-w-[90vw]">
        <div className="relative   p-4  my-4 rounded-md bg- ">
          <div
            className={classNames(
              "fixed left-0 top-0 w-full  z-50 h-full  transition ease-in-out duration-700 ",
              visible
            )}
          >
            {solved == 5 && (
              <div className="text-center">
                <h1 className="relative z-10 mt-[20vh] text-center font-kingEdwards text-white font-semibold text-5xl md:text-6xl">
                  {" "}
                  Well done! Now fill in the fields in the solution page:
                </h1>
                <img
                  src={SolutionPage}
                  className="w-full h-full max-w-[600px] m-auto"
                />
                <h1 className="relative z-10  text-center font-kingEdwards text-white font-semibold text-5xl md:text-6xl">
                  {" "}
                  And solve the Meta Puzzle
                </h1>
                <button
                  onClick={() => {
                    setVisible("hidden bg-black/0 opacity-0");
                    advance();
                  }}
                  className=" font-kingEdwards text-white font-semibold text-4xl md:text-5xl my-5 hover:bg-gray-300 border border-white rounded-lg px-2"
                >
                  Next
                </button>
              </div>
            )}
          </div>
          <img
            src={Border}
            className="absolute max-w-[90vw] w-full h-full top-0 left-0"
          />

          <div
            className={classNames(
              "absolute max-w-[90vw] w-fit  top-0 left-0 transition duration-1000",
              bgImage ? "opacity-30" : "opacity-0"
            )}
          >
            {bgImage && (
              <LazyLoadImage
                className="z-0"
                src={backgroundImage[bgImage][0]}
                placeholderSrc={backgroundImage[bgImage][1]}
                effect="blur"
                alt=""
              />
            )}
          </div>
          <h1 className="relative text-center font-kingEdwards text-primary font-semibold text-5xl md:text-6xl z-10">
            Check Puzzle Answers
          </h1>

          <div className="grid grid-cols-5 md:grid-cols-1 md:flex md:flex-col-reverse m-auto justify-center gap-4 p-4 z-30">
            {Icons.map((x, i) => (
              <div className="group flex flex-col md:flex-row gap-2">
                <PuzzleField
                  changeImage={changeImage}
                  givenLetters={givenLetters[i]}
                  image={x}
                  answer={answers[i]}
                  key={`answer-${i}`}
                  solvePuzzle={() => setSolved((prev) => prev + 1)}
                />
              </div>
            ))}
          </div>

          <div className="bg-black w-full h-[3px] my-8" />
          <h1 className="relative z-10 text-center font-kingEdwards text-primary font-semibold text-5xl mt-3 md:my-10 md:text-6xl my-12 ">
            Solve The Meta Puzzle
          </h1>
          <div className="flex-grow basis-0 flex items-center justify-center flex-shrink-0  -mt-8 md:my-6 scale-90 mb-5 ">
            <MainButton
              text="Meta Puzzle"
              onClick={() => {
                advance();
              }}
            />
          </div>
        </div>
      </div>
    </Frame>
  );
};

export default MainGameFrame;
