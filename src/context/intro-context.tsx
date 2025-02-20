import React, { createContext, use, useState } from "react";

type IntroContextType = {
  isIntroDone: boolean;
  endIntro: () => void;
};

const IntroContext = createContext<IntroContextType | undefined>(undefined);

export const IntroProvider = ({ children }: { children: React.ReactNode }) => {
  const [isIntroDone, setIsIntroDone] = useState(false);

  const endIntro = () => {
    setIsIntroDone(true);
  };

  return <IntroContext value={{ isIntroDone, endIntro }}>{children}</IntroContext>;
};

export const useIntro = () => {
  const context = use(IntroContext);
  if (!context) throw new Error("useIntro must be used within IntroProvider");
  return context;
};
