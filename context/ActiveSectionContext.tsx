"use client";

import { createContext, useContext, useState } from "react";
import { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName | undefined;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

const defaultState: ActiveSectionContextType = {
  activeSection: undefined,
  setActiveSection: () => {},
  timeOfLastClick: 0,
  setTimeOfLastClick: () => {},
};

export const ActiveSectionContext = createContext(
  defaultState as ActiveSectionContextType,
);

export function ActiveSectionProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0); // disable observer momentarily
  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);

  return context;
}
