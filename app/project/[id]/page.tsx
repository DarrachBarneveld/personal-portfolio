import Tags from "@/components/ui/Tags";
import TypeWriter from "@/components/ui/Typewriter";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FunctionComponent } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCode, FaGithub } from "react-icons/fa";

interface PageProps {
  params: { id: string };
}

const page: FunctionComponent<PageProps> = ({ params }) => {
  const { imageUrl, title, excerpt, collaborators, link, tags } =
    projectsData.find((project) => project.id === params.id)!;
  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="-mx-4 flex flex-col md:flex-row">
        <div className="px-4 md:flex-1">
          <div className="mb-4 h-[460px] rounded-lg bg-gray-300 dark:bg-gray-700">
            <Image
              className="h-full w-full object-cover"
              src={imageUrl}
              alt="Product Image"
              quality={95}
            />
          </div>
          <div className="-mx-2 mb-4 flex">
            <div className="w-1/2 px-2">
              <a
                href="https://github.com/DarrachBarneveld"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700"
                target="_blank"
              >
                <FaCode /> Code
              </a>
            </div>
            <div className="w-1/2 px-2">
              <a
                href={link}
                className=" flex w-full items-center justify-center gap-2 rounded-full bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600"
                target="_blank"
              >
                <CgWebsite /> Live Site
              </a>
            </div>
          </div>
        </div>
        <div className="px-4 md:flex-1">
          <h2 className="mb-2 text-2xl font-bold text-gray-800 dark:text-white">
            {title}
          </h2>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-300">
            {excerpt}
          </p>

          <div className="mb-4">
            <Tags tags={tags} />
          </div>
          <div className="mb-4">
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Collaborators
            </span>
            <ul className="items-center">
              {collaborators &&
                collaborators.map((collab, index) => (
                  <li key={index}>
                    <a
                      href={collab.github}
                      aria-label={`Link to ${collab.name}'s Github`}
                      target="_blank"
                      className="flex items-center gap-2 text-lg"
                    >
                      <p className="font-bold">{collab.name}</p>
                      <FaGithub />
                    </a>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <span className="font-bold text-gray-700 dark:text-gray-300">
              Product Description:
            </span>
            <TypeWriter
              text={excerpt}
              className="mt-2 text-sm text-gray-600 dark:text-gray-300"
              delay={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;