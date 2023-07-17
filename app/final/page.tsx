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
      <div className="flex flex-col items-center gap-4">
        <Image src={finalVictorySvg} alt="" width={238} height={136} />
        <p className="text-[#1D355D] font-bold text-3xl">Results</p>
        <div className="flex gap-1 items-end">
          You got <p className="font-bold text-[#6FCF97] text-xl">{score}</p> correct answers
        </div>
        <button onClick={() => push('/')} className="customBtn">Try Again</button>
      </div>
    </MainDiv>
  );
};

export default page;
