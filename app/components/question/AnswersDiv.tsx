"use client";

import React, { useEffect, useState } from "react";
import AnswerCard from "./AnswerCard";
import { useRouter } from "next/navigation";
import { useQuizContext } from "@/app/utils/context/QuizContext";
import Loading from "../loading/Loading";

const INDEXES = ["A.", "B.", "C.", "D."];

const AnswersDiv = () => {
  const { currentQuestion, playerScore, getQuestion, loading } =
    useQuizContext();
  const { currentNumberQuestion, maxQuestions } = playerScore;
  const [answered, setAnswered] = useState(false);
  // este es el que se ha clickeado
  const [answerIndex, setAnswerIndex] = useState(-1);
  const { push } = useRouter();

  const answerCard = (index: number) => {
    setAnswerIndex(index);
    setAnswered(true);
  };

  const resetAnswers = () => {
    setAnswerIndex(-1);
    setAnswered(false);
  };

  const handleNextQuestion = () => {
    if (currentNumberQuestion > maxQuestions) {
      push("final");
    } else {
      resetAnswers();
      getQuestion();
    }
  };

  if (loading) return <Loading />;

  return (
    <div className="flex flex-col gap-4">
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
            key={`opcion_${index}`}
          />
        );
      })}
      {answered && (
        <button className="customBtn self-end" onClick={handleNextQuestion}>
          Next
        </button>
      )}
    </div>
  );
};

export default AnswersDiv;
