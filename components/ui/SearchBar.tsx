import { FunctionComponent, FormEvent, ChangeEvent } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchBarProps {
  value: string;
  setValue: (value: string) => void;
}

const SearchBar: FunctionComponent<SearchBarProps> = ({ value, setValue }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Perform the search here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="m-2 mx-auto flex max-w-[480px] items-center justify-center px-4"
    >
      <div className="relative w-full">
        <input
          type="text"
          className="h-12 w-full rounded-full border p-4 text-indigo-500 caret-indigo-500 shadow outline-indigo-500"
          placeholder="Search"
          value={value}
          onChange={handleChange}
        />
        <button type="submit">
          <FaSearch className="t absolute right-3 top-3.5 h-5 w-5 fill-current text-indigo-500" />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
