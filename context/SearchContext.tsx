"use client";

import { createContext, useContext, useState } from "react";

type SearchContextProviderProps = {
  children: React.ReactNode;
};

type SearchContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

const defaultState: SearchContextType = {
  search: "",
  setSearch: () => {},
};

export const SearchContext = createContext(defaultState as SearchContextType);

export function SearchProvider({ children }: SearchContextProviderProps) {
  const [search, setSearch] = useState<string>("");

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const context = useContext(SearchContext);
  return context;
}
