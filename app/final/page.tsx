"use client";

import React from "react";
import MainDiv from "../components/MainDiv";
import finalVictorySvg from "../../public/undraw_winners_ao2o 2.svg";
import Image from "next/image";
import { useQuizContext } from "../utils/context/QuizContext";
import { useRouter } from "next/navigation";

const page = () => {
  const { playerScore } = useQuizContext();
  const { score } = playerScore;
  const { push } = useRouter();

  return (
    <MainDiv>
      <div className="">
        <Image src={finalVictorySvg} alt="" width={238} height={136} />
        <p>Results</p>
        <div>
          You got <p>{score}</p> correct answers
        </div>
        <button onClick={() => push('/')}>Try Again</button>
      </div>
    </MainDiv>
  );
};

export default page;
