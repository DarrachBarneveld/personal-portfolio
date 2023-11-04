import { FunctionComponent, ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
}

const SectionHeading: FunctionComponent<SectionHeadingProps> = ({
  children,
}) => {
  return (
    <h2 className="mb-8 text-center text-3xl font-medium capitalize">
      {children}
    </h2>
  );
};

export default SectionHeading;
