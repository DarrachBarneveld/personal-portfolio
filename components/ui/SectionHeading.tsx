import { FunctionComponent, ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

const SectionHeading: FunctionComponent<SectionHeadingProps> = ({
  children,
}) => {
  return (
    <h2 className="mb-8 text-center text-2xl font-black capitalize text-indigo-950 lg:text-4xl">
      {children}
    </h2>
  );
};

export default SectionHeading;
