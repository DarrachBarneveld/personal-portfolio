"use client";

import { createContext, useContext, useState } from "react";

type SearchContextProviderProps = {
  children: React.ReactNode;
};

type SearchContextType = {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filterTags: string[];
  handleFilterTags: (tag: string) => void;
};

const defaultState: SearchContextType = {
  search: "",
  setSearch: () => {},
  filterTags: [],
  handleFilterTags: () => {},
};

export const SearchContext = createContext(defaultState as SearchContextType);

export function SearchProvider({ children }: SearchContextProviderProps) {
  const [search, setSearch] = useState<string>("");

  const [filterTags, setFilterTags] = useState<string[]>([]);

  function handleFilterTags(tag: string) {
    setFilterTags((prev) => {
      return prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag];
    });
  }

  return (
    <SearchContext.Provider
      value={{
        search,
        setSearch,
        filterTags,
        handleFilterTags,
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
