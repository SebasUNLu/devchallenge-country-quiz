"use client";

import { useQuizContext } from "@/app/utils/context/QuizContext";
import React from "react";
import { ProgressBar } from "react-loader-spinner";
import { redirect, useRouter } from "next/navigation";

const HomeDiv = () => {
  const { loading, start } = useQuizContext();
  const { push } = useRouter();

  const handleClick = () => {
    start()
    console.log('s')
    push('/question')
  };

  return (
    <div className="">
      <h1>Welcome to the Country Quiz</h1>
      <p>Test your knowledge about country capitals and flags</p>
      {loading ? (
        <ProgressBar />
      ) : (
        <button className="" onClick={() => handleClick()}>
          Start the quiz
        </button>
      )}
    </div>
  );
};

export default HomeDiv;
