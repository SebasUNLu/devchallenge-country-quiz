import React from "react";
import { ProgressBar } from "react-loader-spinner";

interface LoadingProps {
  text?: string;
}

const Loading = ({ text = "" }: LoadingProps) => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {text && (
        <h1 className="text-center text-2xl font-semibold text-[#1D355D]">
          {text}
        </h1>
      )}
      <ProgressBar />
    </div>
  );
};

export default Loading;
