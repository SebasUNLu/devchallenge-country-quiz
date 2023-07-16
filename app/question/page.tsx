"use client";

import React, { useEffect, useState } from "react";
import { useQuizContext } from "../utils/context/QuizContext";
import MainDiv from "../components/MainDiv";
import { QuestionEnum } from "../utils/types/types";
import Image from "next/image";
import AnswersDiv from "./AnswersDiv";

const page = () => {
  const { currentQuestion, answer, loading, getQuestion } = useQuizContext();
  const [question, setQuestion] = useState("");

  useEffect(() => {
    switch (currentQuestion.question) {
      case QuestionEnum.CAPITAL_QUESTION:
        setQuestion(`${currentQuestion.mainSubject} is the capital of:`);
        break;
      default:
        setQuestion(`Which country does this flag belong to:`);
        break;
    }
  }, []);

  const generateNextQuestion = () => {
    
  }

  return (
    <MainDiv adventureSvg>
      {currentQuestion.question === QuestionEnum.FLAG_QUESTION && (
        <Image
          src={currentQuestion.mainSubject}
          alt=""
          className=""
          width={84}
          height={54}
        />
      )}
      <h1>{question}</h1>
      <AnswersDiv />
    </MainDiv>
  );
};

export default page;
