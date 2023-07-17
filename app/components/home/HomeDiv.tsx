"use client";

import { useQuizContext } from "@/app/utils/context/QuizContext";
import React from "react";
import { ProgressBar } from "react-loader-spinner";
import { redirect, useRouter } from "next/navigation";
import AnswerCard from "@/app/components/question/AnswerCard";

const HomeDiv = () => {
  const { loading, start } = useQuizContext();
  const { push } = useRouter();

  const handleClick = () => {
    start()
    push('/question')
  };

  return (
    <div className="flex flex-col items-center gap-7">
      <h1 className="font-bold text-4xl text-center text-[#1D355D]">Welcome to the Country Quiz</h1>
      <p className="text-center text-2xl font-semibold text-[#1D355D]">Test your knowledge about country capitals and flags</p>
      {loading ? (
        <ProgressBar />
      ) : (
        <button className="customBtn" onClick={() => handleClick()}>
          Start the quiz
        </button>
      )}
    </div>
  );
};

export default HomeDiv;
