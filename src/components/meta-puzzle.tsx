import { useState, useEffect, FunctionComponent, useContext } from "react";
import classNames from "classnames";
import { AppContext } from "contexts/app";

import { PlaySound, TypingSound, SuccessSound, ErrorSound } from "sounds/sound";

const MetaPuzzle = () => {
  const { advance, setPaused } = useContext(AppContext);
  const [solved, setSolved] = useState(false);
  const [value, setValue] = useState([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const [err, setErr] = useState(false);

  const answer = "ONEFINALMISSION";

  useEffect(() => {
    const storage = window.sessionStorage.getItem(answer);
    if (storage === "true") {
      setSolved(true);
      setValue(answer.toUpperCase().split(""));
    }
  }, []);

  const handleChange = (index: number, newValue: string) => {
    const updatedValue = [...value];
    updatedValue[index] = newValue.toUpperCase();
    setValue(updatedValue);

    if (
      updatedValue.join("").length == answer.length &&
      updatedValue.join("") == answer.toUpperCase()
    ) {
      setErr(false);
      setSolved(true);
      PlaySound(SuccessSound);
      setSolved(true);
      setTimeout(() => {
        advance();
        setPaused(true);
      }, 4000);

      window.sessionStorage.setItem(answer, "true");
    } else if (updatedValue.join("").length == answer.length) {
      PlaySound(ErrorSound);
      setErr(true);
      setTimeout(() => {
        setErr(false);
      }, 5000);
    }
  };

  const keyboardClick = (e: any) => {
    PlaySound(TypingSound);
    if (e.key === "Enter") {
      if (Number(e.currentTarget.id.slice(answer.length + 1)) < answer.length)
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) + 1
              ).toString()
          )
          ?.focus();
      else {
      }
      return;
    } else if (e.key === " " || e.key === "Spacebar") {
      e.currentTarget.value = e.currentTarget.value.slice(
        0,
        e.currentTarget.value.length - 1
      );
      if (Number(e.currentTarget.id.slice(answer.length + 1)) < answer.length) {
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) + 1
              ).toString()
          )
          ?.focus();
        return;
      }
    } else if (e.key === "ArrowLeft") {
      if (Number(e.currentTarget.id.slice(answer.length + 1)) > 1)
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) - 1
              ).toString()
          )
          ?.focus();
      else e.currentTarget.select();
    } else if (e.key === "ArrowRight") {
      if (Number(e.currentTarget.id.slice(answer.length + 1)) < answer.length)
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) + 1
              ).toString()
          )
          ?.focus();
      else e.currentTarget.select();
    } else {
      if (!/[a-zA-Z]/i.test(e.key)) {
        let temp = value;
        value[Number(e.currentTarget.id.slice(answer.length + 1))] = "";
        setValue(temp);
      }
      if (
        Number(e.currentTarget.id.slice(answer.length + 1)) < answer.length &&
        e.currentTarget.value.length > 0
      ) {
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) + 1
              ).toString()
          )
          ?.focus();
      }
      if (
        e.key === "Backspace" &&
        Number(e.currentTarget.id.slice(answer.length + 1)) > 1 &&
        e.currentTarget.value.length === 0
      ) {
        document
          .getElementById(
            answer +
              "-" +
              (
                Number(e.currentTarget.id.slice(answer.length + 1)) - 1
              ).toString()
          )
          ?.focus();
      }
    }
  };

  return (
    <div className="flex flex-col items-center ">
      <h3 className="relative z-10 text-xl  font-black font-frank m-4 ">
        "That which is left for me to accomplish. That which lies ahead"
      </h3>
      <div className="gap-2 my-3 flex flex-col items-center">
        <div className="flex gap-2">
          {["o", "n", "e"].map((_, index) => (
            <input
              id={`${answer}-${index + 1}`}
              key={`${answer}-${index + 1}`}
              className={classNames(
                "md:w-8 md:h-12 h-10 w-7 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent bg-white/50 z-20 transition duration-200 ease-in text-center font-frank pr-2 font-semibold md:text-4xl text-3xl justify-center shadow-md shadow-black",
                solved ? "ring-green-400 shadow-green-600" : "",
                err ? "ring-red-400 shadow-red-600" : ""
              )}
              onClick={(e) => {
                e.currentTarget.select();
              }}
              maxLength={1}
              type="text"
              disabled={solved}
              onFocus={(e) => {
                e.currentTarget.select();
              }}
              value={value[index]}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyUp={keyboardClick}
            />
          ))}
        </div>
        <div className="flex gap-2">
          {["f", "i", "n", "a", "l"].map((_, index) => (
            <input
              id={`${answer}-${index + 4}`}
              key={`${answer}-${index + 4}`}
              className={classNames(
                "md:w-8 md:h-12 h-10 w-7 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent bg-white/50 z-20 transition duration-200 ease-in text-center font-frank pr-2 font-semibold md:text-4xl text-3xl justify-center shadow-md shadow-black",
                solved ? "ring-green-400 shadow-green-600" : "",
                err ? "ring-red-400 shadow-red-600" : ""
              )}
              onClick={(e) => {
                e.currentTarget.select();
              }}
              maxLength={1}
              type="text"
              disabled={solved}
              onFocus={(e) => {
                e.currentTarget.select();
              }}
              value={value[index + 3]}
              onChange={(e) => handleChange(index + 3, e.target.value)}
              onKeyUp={keyboardClick}
            />
          ))}
        </div>
        <div className="flex gap-2 mb-10">
          {["m", "i", "s", "s", "i", "o", "n"].map((_, index) => (
            <input
              id={`${answer}-${index + 9}`}
              key={`${answer}-${index + 9}`}
              className={classNames(
                "md:w-8 md:h-12 h-10 w-7 rounded-md caret-transparent ring-2 ring-black focus:outline-secondary selection:bg-transparent bg-white/50 z-20 transition duration-200 ease-in text-center font-frank pr-2 font-semibold md:text-4xl text-3xl justify-center shadow-md shadow-black",
                solved ? "ring-green-400 shadow-green-600" : "",
                err ? "ring-red-400 shadow-red-600" : ""
              )}
              onClick={(e) => {
                e.currentTarget.select();
              }}
              maxLength={1}
              type="text"
              disabled={solved}
              onFocus={(e) => {
                e.currentTarget.select();
              }}
              value={value[index + 8]}
              onChange={(e) => handleChange(index + 8, e.target.value)}
              onKeyUp={keyboardClick}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MetaPuzzle;
