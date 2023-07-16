import Image from "next/image";
import MainDiv from "./components/MainDiv";
import HomeDiv from "./components/home/HomeDiv";

export default function Home() {
  return (
    <MainDiv adventureSvg>
      <HomeDiv />
    </MainDiv>
  );
}
