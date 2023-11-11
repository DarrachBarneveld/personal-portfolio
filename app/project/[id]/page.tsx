import { projectsData } from "@/lib/data";
import { FunctionComponent } from "react";

interface PageProps {
  params: { id: string };
}

const page: FunctionComponent<PageProps> = ({ params }) => {
  const project = projectsData.find((project) => project.id === params.id);
  return (
    <div>
      <h1>{project?.title}</h1>
      <p>{project?.description}</p>
    </div>
  );
};

export default page;
