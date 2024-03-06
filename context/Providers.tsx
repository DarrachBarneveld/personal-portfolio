import { FunctionComponent, ReactNode } from "react";
import { ActiveSectionProvider } from "./ActiveSectionContext";
import { SearchProvider } from "./SearchContext";

interface ProvidersProps {
  children: ReactNode;
}

const Providers: FunctionComponent<ProvidersProps> = ({ children }) => {
  return (
    <ActiveSectionProvider>
      <SearchProvider>{children}</SearchProvider>
    </ActiveSectionProvider>
  );
};

export default Providers;
