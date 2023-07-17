import React from "react";

import adventureIamgeSvg from "../../public/undraw_adventure_4hum 1.svg";
import Image from "next/image";

type MainDivProps = React.PropsWithChildren & {
  adventureSvg?: boolean;
};

const MainDiv = ({
  adventureSvg = false,
  children,
}: MainDivProps) => {
  return (
    <div className="w-10/12 max-w-md">
      <h1 className="w-full text-white font-bold text-4xl leading-[50px] mb-3">
        COUNTRY QUIZ
      </h1>
      <div
        className={` bg-white px-8 pb-8 ${
          adventureSvg ? "pt-16" : "pt-8"
        } rounded-3xl relative`}
      >
        {adventureSvg && (
          <Image
            src={adventureIamgeSvg}
            alt="adventure Svg"
            width={162}
            height={116}
            className="absolute top-[-5em] right-0"
          />
        )}
        <div className="w-full">{children}</div>
      </div>
    </div>
  );
};

export default MainDiv;
