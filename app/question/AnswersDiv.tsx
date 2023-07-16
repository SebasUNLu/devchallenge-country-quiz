"use client";

import React, { useState } from "react";
import { useQuizContext } from "../utils/context/QuizContext";
import AnswerCard from "./AnswerCard";

const INDEXES = ["A.", "B.", "C.", "D."];

const AnswersDiv = () => {
  const { currentQuestion } = useQuizContext();
  const [answered, setAnswered] = useState(false);
  // este es el que se ha clickeado
  const [answerIndex, setAnswerIndex] = useState(-1);

  const answerCard = (index: number) => {
    setAnswerIndex(index);
    setAnswered(true);
  };

  return (
    <div>
      {currentQuestion.answers.map((ans, index) => {
        return (
          <AnswerCard
            clickable={!answered}
            index={INDEXES[index]}
            state={
              ans === currentQuestion.correct_Response
                ? index === answerIndex
                  ? "correct"
                  : answered
                  ? "correct"
                  : "normal"
                : index === answerIndex
                ? "wrong"
                : "normal"
            }
            text={ans}
            clickCallback={() => answerCard(index)}
          />
        );
      })}
      {answered && (
        <button className="" onClick={() => {}}>
          Next
        </button>
      )}
    </div>
  );
};

export default AnswersDiv;
