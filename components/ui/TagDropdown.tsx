import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { IoFilter } from "react-icons/io5";

import { colorTagVariants } from "./Tags";
import clsx from "clsx";
import { useSearchContext } from "@/context/SearchContext";

export default function TagDropdown() {
  const { handleFilterTags } = useSearchContext();
  return (
    <div className="">
      <Menu as="div" className="relative ">
        <div className="flex items-center">
          <Menu.Button className="group py-1 text-sm font-medium hover:text-indigo-800 focus:outline-none focus-visible:ring-2">
            <IoFilter className="h-7 w-7 text-indigo-500 group-hover:text-indigo-700" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="no-scrollbar absolute -left-5 top-7 z-50 mt-2 h-60 w-fit  overflow-scroll rounded-md border-2 border-indigo-500 bg-white p-1 px-2 shadow-xl shadow-indigo-950 ring-1 ring-black/5 focus:outline-none">
            <div className="px-1 py-1">
              {Object.keys(colorTagVariants).map(
                (key: string, index: number) => (
                  <Menu.Item key={key + index}>
                    {({ active }) => (
                      <button
                        onClick={(e: React.MouseEvent) => {
                          handleFilterTags(key);
                        }}
                        className={clsx(
                          `${colorTagVariants[key][0]} mb-1 w-full rounded-full px-2 py-1 text-left text-[0.7rem] uppercase tracking-wider lg:text-[0.8rem]  
                    ${colorTagVariants[key][1]} flex-nowrap whitespace-nowrap transition-colors duration-200 hover:bg-gray-800 hover:text-white hover:ring-indigo-500 focus:bg-gray-900 focus:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-1 focus:ring-offset-gray-100`,
                        )}
                      >
                        {key}
                      </button>
                    )}
                  </Menu.Item>
                ),
              )}
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
