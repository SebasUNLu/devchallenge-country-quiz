"use client";
import { useQuizContext } from "../utils/context/QuizContext";

type cardState = "normal" | "correct" | "wrong";

interface AnswerCardProps {
  index: string;
  text: string;
  state: cardState;
  clickable: boolean;
  clickCallback?: () => void;
}

const AnswerCard = ({
  text,
  index,
  state,
  clickable,
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
  const normalStyle = `bg-white text-[#6066D0CC]`;
  const clickableStyle = `bg-white text-[#6066D0CC] hover:bg-[#F9A826] hover:text-white cursor-pointer`;

  return (
    <div
      className={`w-full flex py-4 px-5 transition-all duration-400 ${
        clickable && clickableStyle
      } ${state === "correct" && correctStyle} ${
        state === "wrong" && wrongStyle
      } ${state === "normal" && normalStyle}`}
      onClick={handleClick}
    >
      <p className="">{index}</p>
      <p className="ml-10">{text}</p>
    </div>
  );
};

export default AnswerCard;
