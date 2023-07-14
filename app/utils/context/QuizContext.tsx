"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { Api_Response, Country, QuestionEnum } from "../types/types";

interface CurrentQuestion {
  question: QuestionEnum;
  mainSubject: string;
  answers: string[];
  correct_Response: string;
}

interface PlayerScore {
  score: number;
  maxQuestions: number;
  currentNumberQuestion: number;
}

const EMPRY_CURRENTQUESTION: CurrentQuestion = {
  mainSubject: "",
  answers: [],
  correct_Response: "",
  question: QuestionEnum.FLAG_QUESTION,
};

const EMPTY_PLAYERSCORE: PlayerScore = {
  score: 0,
  currentNumberQuestion: 1,
  maxQuestions: 4,
};

interface QuizContextProps {
  currentQuestion: CurrentQuestion;
  playerScore: PlayerScore;
  countries: Country[];
  loading: boolean;
  getQuestion: () => void;
  answer: (playerAnswer: string) => void;
}

const QuizContext = createContext<QuizContextProps>({
  countries: [],
  currentQuestion: EMPRY_CURRENTQUESTION,
  playerScore: EMPTY_PLAYERSCORE,
  loading: false,
  getQuestion: () => {},
  answer: () => {},
});

const QuizContextPovider = ({ children }: React.PropsWithChildren) => {
  const [loading, setLoading] = useState(false);
  const [countries, setCountries] = useState<Country[]>([]);
  const [playerScore, setPlayerScore] =
    useState<PlayerScore>(EMPTY_PLAYERSCORE);
  const [currentQuestion, setCurrentQuestion] = useState<CurrentQuestion>(
    EMPRY_CURRENTQUESTION
  );

  useEffect(() => {
    getAllCountries();
  }, []);

  const getAllCountries = async () => {
    setLoading(true);
    try {
      const response: Api_Response = await fetch(
        "https://restcountries.com/v3.1/all?fields=name,flags,capital"
      ).then((res) => res.json());
      const apiCountries = response.map(({ capital, flags, name }) => {
        const newCountry: Country = {
          capital: capital[0],
          flag: flags.svg,
          name: name.common,
        };
        return newCountry;
      });
      setCountries(apiCountries);
    } catch (e) {
      console.log(e);
    } finally {
      setLoading(false);
    }
  };

  const resetScore = () => {
    setPlayerScore(EMPTY_PLAYERSCORE);
    setCurrentQuestion(EMPRY_CURRENTQUESTION);
  };

  // Function to generate random number
  const randomNumber = (min: number, max: number) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  /**
   * Genera 4 números, que representan los países elegidos para la pregunta actual.
   * @returns number[]
   */
  const generatePositionNumbers = (): number[] => {
    const generatedNumbers: number[] = [];
    do {
      let randomNum = randomNumber(0, countries.length - 1);
      while (generatedNumbers.includes(randomNum)) {
        randomNum = randomNumber(0, countries.length - 1);
      }
      generatedNumbers.push(randomNum);
    } while (generatedNumbers.length < 4);
    return generatedNumbers;
  };

  /**
   * Inicia el proceso de armar una pregunta. Estas solo pueden ser de Capital o de Bandera.
   */
  const getQuestion = () => {
    resetScore();
    setLoading(true);
    const generatedQuestion = randomNumber(0, 1);

    // TODO Tener 4 numeros distintos para los paises
    const generatedNumbers = generatePositionNumbers();
    // TODO Tener los paises en un array
    const generatedCountries = generatedNumbers.map((num) => countries[num]);
    // TODO Llenar currentQuestion.answwers con las capitales de los paises
    const newAnswers = generatedCountries.map((country) => country.name);
    // TODO Elegir uno de las opciones y convertirlo en la repsuesta correcta
    const correctCountryPosition = randomNumber(0, generatedNumbers.length - 1);
    const correctCountry = generatedCountries[correctCountryPosition];
    const newCorrectAnswer = correctCountry.name;
    let newMainSubject;
    let newQuestion;
    switch (generatedQuestion) {
      case 0:
        newMainSubject = correctCountry.capital;
        newQuestion = QuestionEnum.CAPITAL_QUESTION;
        break;
      default:
        newMainSubject = correctCountry.flag;
        newQuestion = QuestionEnum.FLAG_QUESTION;
        break;
    }
    const newCurrentQuestion: CurrentQuestion = {
      answers: newAnswers,
      correct_Response: newCorrectAnswer,
      mainSubject: newMainSubject,
      question: newQuestion,
    };
    setCurrentQuestion(newCurrentQuestion);
    setLoading(false);
  };

  // TODO Responder pregunta
  const answer = (playerAnswer: string) => {
    setPlayerScore((prev) => ({
      ...prev,
      currentNumberQuestion: prev.currentNumberQuestion + 1,
      score:
        playerAnswer === currentQuestion.correct_Response
          ? prev.score + 1
          : prev.score,
    }));
  };

  return (
    <QuizContext.Provider
      value={{
        countries,
        loading,
        currentQuestion,
        playerScore,
        getQuestion,
        answer,
      }}
    >
      {children}
    </QuizContext.Provider>
  );
};

export default QuizContextPovider;

export const useQuizContext = () => useContext(QuizContext);
