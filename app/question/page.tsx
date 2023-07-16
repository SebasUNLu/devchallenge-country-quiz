"use client";

import React from "react";
import { useQuizContext } from "../utils/context/QuizContext";

const page = () => {
  const { currentQuestion } = useQuizContext();

  return (
    <div>
      <h1>Question page</h1>
      <h2>{currentQuestion.question}</h2>
    </div>
  );
};

export default page;
