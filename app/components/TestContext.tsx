"use client";

import React from "react";
import { useQuizContext } from "../utils/context/QuizContext";
import Image from "next/image";

const TestContext = () => {
  const { countries, getQuestion } = useQuizContext();
  return (
    <div>
      <button onClick={getQuestion}>Test</button>
    </div>
  );
};

export default TestContext;
