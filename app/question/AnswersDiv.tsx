"use client";

import React, { useEffect, useState } from "react";
import { useQuizContext } from "../utils/context/QuizContext";
import AnswerCard from "./AnswerCard";
import { useRouter } from "next/navigation";
import Loading from "../components/loading/Loading";

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
    console.log("Generating next question...");
    if (currentNumberQuestion > maxQuestions) {
      push("final");
    } else {
      resetAnswers();
      getQuestion();
    }
  };

  if (loading) return <Loading />;

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
        <button className="" onClick={handleNextQuestion}>
          Next
        </button>
      )}
    </div>
  );
};

export default AnswersDiv;
