import { useSearchContext } from "@/context/SearchContext";
import { FunctionComponent, FormEvent, ChangeEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { IoFilter } from "react-icons/io5";

import Tags from "./Tags";
import TagDropdown from "./TagDropdown";

interface SearchBarProps {}

const SearchBar: FunctionComponent<SearchBarProps> = () => {
  const { search, setSearch, filterTags } = useSearchContext();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Perform the search here
  };

  return (
    <div className="m-2">
      <form
        onSubmit={handleSubmit}
        className="m-2 mx-auto flex max-w-[480px] items-center justify-center px-4"
      >
        <div className="relative w-full">
          <input
            type="text"
            className="h-12 w-full rounded-full border p-4 text-indigo-500 caret-indigo-500 shadow outline-indigo-500"
            placeholder="Search"
            value={search}
            onChange={handleChange}
          />
          <button type="submit">
            <FaSearch className="t absolute right-3 top-3.5 h-5 w-5 fill-current text-indigo-500" />
          </button>
        </div>
      </form>
      <div className="mx-auto flex max-w-[450px] items-center gap-2 rounded-full border-black/30 bg-white px-4 shadow">
        <TagDropdown />
        <div className="no-scrollbar w-full items-center overflow-scroll p-1">
          <Tags tags={filterTags} xl className="flex-nowrap" />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
