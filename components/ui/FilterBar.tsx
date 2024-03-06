import { FunctionComponent } from "react";
import TagDropdown from "./TagDropdown";
import Tags from "./Tags";
import { useSearchContext } from "@/context/SearchContext";

interface FilterBarProps {}

const FilterBar: FunctionComponent<FilterBarProps> = () => {
  const { filterTags } = useSearchContext();

  return (
    <div className="mx-auto my-2 flex max-w-[450px] items-center gap-2 rounded-full border-black/30 bg-white px-4 shadow">
      <TagDropdown />
      <div className="no-scrollbar w-full items-center overflow-scroll p-1">
        <Tags tags={filterTags} xl className="flex-nowrap" />
      </div>
    </div>
  );
};

export default FilterBar;
