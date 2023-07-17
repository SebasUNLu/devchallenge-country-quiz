import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import QuizContextPovider from "./utils/context/QuizContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Country Quiz!",
  description: "Country quiz, to test your knowledge.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[url("/background.png")] bg-no-repeat bg-cover bg-center flex items-center justify-stretch`}
        suppressHydrationWarning={true}
      >
        <QuizContextPovider>
          <main className="flex min-h-screen flex-col items-center justify-evenly py-10 px-4 w-full">
            {children}
            <div className="text-white">
              Made by{" "}
              <a
                href="https://github.com/SebasUNLu"
                target="_blank"
                className="underline font-bold"
              >
                Sebastián Marchetti
              </a>{" "}
              -{" "}
              <a
                href="https://devchallenges.io/paths/front-end-developer"
                target="_blank"
                className=""
              >
                devchallenge.io
              </a>
            </div>
          </main>
        </QuizContextPovider>
      </body>
    </html>
  );
}
