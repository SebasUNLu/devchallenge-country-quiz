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
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-[url("/background.png")] bg-no-repeat bg-cover bg-center flex items-center justify-stretch`}
      >
        <QuizContextPovider>
          <main className="flex min-h-screen flex-col items-center justify-center py-10 px-4 w-full">
            {children}
          </main>
        </QuizContextPovider>
      </body>
    </html>
  );
}
