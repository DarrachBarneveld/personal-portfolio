"use client";

import { createContext, useState } from "react";
import { SectionName } from "@/lib/types";

type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

type ActiveSectionContextType = {
  activeSection: SectionName | undefined;
  setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

const defaultState: ActiveSectionContextType = {
  activeSection: undefined,
  setActiveSection: () => {},
};

export const ActiveSectionContext = createContext(
  defaultState as ActiveSectionContextType,
);

export function ActiveSectionProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Home");

  return (
    <ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
      {children}
    </ActiveSectionContext.Provider>
  );
}
