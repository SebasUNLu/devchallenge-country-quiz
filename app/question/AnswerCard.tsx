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
  const clickableStyle = `hover:bg-[#F9A826] hover:text-white cursor-pointer`;

  return (
    <div
      className={`w-full bg-white text-[#6066D0CC] flex py-4 px-5 ${
        clickable && clickableStyle
      } ${state === "correct" && correctStyle} ${
        state === "wrong" && wrongStyle
      }`}
      onClick={handleClick}
    >
      <p className="">{index}</p>
      <p className="ml-10">{text}</p>
    </div>
  );
};

export default AnswerCard;
