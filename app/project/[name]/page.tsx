import Tags from "@/components/ui/Tags";
import TypeWriter from "@/components/ui/Typewriter";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { FunctionComponent } from "react";
import { CgWebsite } from "react-icons/cg";
import { FaCode, FaGithub } from "react-icons/fa";

interface PageProps {
  params: { name: string };
}

const page: FunctionComponent<PageProps> = ({ params }) => {
  const {
    imageUrl,
    title,
    excerpt,
    collaborators,
    link,
    tags,
    description,
    github,
    video,
  } = projectsData.find((project) => project.name === params.name)!;

  return (
    <section className="lg:px8 mx-auto mb-28 min-h-screen w-full max-w-[100rem] scroll-mt-40 px-4 md:px-6">
      <div className="-mx-4 flex w-full flex-col justify-center md:flex-row">
        <div className="px-4 md:flex-1">
          {video ? (
            <video
              className="mb-4 max-h-[600px] w-full rounded-lg "
              loop
              controls
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="mb-4 h-full overflow-hidden rounded-lg">
              <Image
                className="h-full w-full object-cover"
                src={imageUrl}
                alt="Product Image"
                quality={95}
              />
            </div>
          )}
          <div className="-mx-2 mb-4 flex">
            <div className="w-1/2 px-2">
              <a
                href={github}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gray-900 px-4 py-2 font-bold text-white hover:bg-gray-800"
                target="_blank"
              >
                <FaCode /> Code
              </a>
            </div>
            <div className="w-1/2 px-2">
              <a
                href={link}
                className="flex w-full items-center justify-center gap-2 rounded-full bg-gray-200 px-4 py-2 font-bold text-gray-800 hover:bg-gray-300"
                target="_blank"
              >
                <CgWebsite /> <span>Live Demo</span>
              </a>
            </div>
          </div>
        </div>
        <div className="px-4 md:flex-1">
          <h2 className="mb-2 text-2xl font-bold text-gray-800">{title}</h2>
          <p className="mb-4 mt-2 text-base text-gray-600">{excerpt}</p>

          <div className="mb-4">
            <Tags tags={tags} />
          </div>
          {collaborators.length != 0 && (
            <div className="mb-4">
              <span className="font-bold text-gray-700">Collaborators</span>
              <ul className="items-center">
                {collaborators &&
                  collaborators.map(async (collab, index) => {
                    const response = await fetch(
                      `https://api.github.com/users/${collab.account}`,
                      {
                        headers: {
                          Authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_ACCESS_TOKEN}`,
                        },
                      },
                    );

                    const data = await response.json();
                    return (
                      <a
                        href={collab.github}
                        target="_blank"
                        key={index + collab.account}
                      >
                        <li className="group flex cursor-pointer items-center justify-between border-t p-3 hover:bg-gray-200">
                          <div className="flex items-center">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={data.avatar_url}
                            />
                            <div className="ml-2 flex flex-col">
                              <div className="text-sm font-bold leading-snug text-gray-900">
                                {collab.name}
                              </div>
                              <div className="text-xs leading-snug text-gray-600">
                                @{collab.account}
                              </div>
                            </div>
                          </div>
                          <button className="text-md flex items-center justify-center gap-2 rounded-full border border-blue-400 px-3 py-1 font-bold text-blue-400 group-hover:bg-blue-100">
                            <FaGithub />
                            Follow
                          </button>
                        </li>
                      </a>
                    );
                  })}
              </ul>
            </div>
          )}

          <div>
            <span className="font-bold text-gray-700 ">Description:</span>

            <TypeWriter
              text={excerpt}
              className="text-base leading-7 text-gray-600 "
              delay={10}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
