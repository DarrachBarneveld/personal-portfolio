import { FunctionComponent } from "react";
import { motion } from "framer-motion";
import { stackData } from "@/lib/data";

type StackCardProps = (typeof stackData)[number];

const StackCard: FunctionComponent<StackCardProps> = ({ title, tech }) => {
  return (
    <div className="mx-auto h-full min-w-[300px] overflow-hidden rounded-lg border-2 shadow-xl">
      <header className="p-4 pb-6 pt-10 text-center leading-tight">
        <h2 className="text-3xl font-bold uppercase tracking-wide text-gray-700">
          {title}
        </h2>
      </header>
      <ul className="flex flex-col bg-gray-100 p-6">
        {tech.map((skill, index) => (
          <motion.li
            className="mb-3 inline-flex flex-1 items-center"
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: index * 0.2 }}
          >
            <div className="mr-3 rounded-full bg-green-300 p-1">
              <svg
                className="h-3 w-3 fill-current text-green-800"
                viewBox="0 0 20 20"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <polygon points="0 11 2 9 7 14 18 3 20 5 7 18"></polygon>
              </svg>
            </div>
            <p className="text-xs">{skill}</p>
          </motion.li>
        ))}
      </ul>
    </div>
  );
};

export default StackCard;
