"use client";

import { useQuizContext } from "../../utils/context/QuizContext";
import { BiCheckCircle, BiXCircle } from "react-icons/bi";

type cardState = "normal" | "correct" | "wrong";

interface AnswerCardProps {
  index: string;
  text: string;
  state: cardState;
  clickable?: boolean;
  clickCallback?: () => void;
}

const AnswerCard = ({
  text,
  index,
  state,
  clickable = false,
  clickCallback,
}: AnswerCardProps) => {
  const { answer } = useQuizContext();
  const handleClick = () => {
    if (clickable) {
      clickCallback && clickCallback();
      answer(text);
    }
  };

  const correctStyle = `bg-[#60BF88] text-white`;
  const wrongStyle = `bg-[#EA8282] text-white`;
  const normalStyle = `bg-white text-[#6066D0CC] border-2 border-[#6066D0B2]`;
  const clickableStyle = `bg-white text-[#6066D0CC] hover:bg-[#F9A826] hover:text-white hover:border-transparent cursor-pointer`;

  return (
    <div
      className={`w-full flex py-4 px-5 transition-all duration-400 rounded-xl justify-between ${
        clickable && clickableStyle
      } ${state === "correct" && correctStyle} ${
        state === "wrong" && wrongStyle
      } ${state === "normal" && normalStyle}`}
      onClick={handleClick}
    >
      <div className="flex">
        <p className="">{index}</p>
        <p className="ml-10">{text}</p>
      </div>
      {state === "correct" && <BiCheckCircle className="self-center w-6 h-6" />}
      {state === "wrong" && <BiXCircle className="self-center w-6 h-6" />}
    </div>
  );
};

export default AnswerCard;
