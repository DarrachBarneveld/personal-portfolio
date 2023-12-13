import Image from "next/image";
import { FunctionComponent } from "react";
import ScrollViewWrapper from "./ui/ScrollViewWrapper";
import { ProjectCategoryProps } from "./ProjectCategory";

type TSetterFunction = {
  setter: (boolean: boolean) => void;
};

type CategoryCardProps = ProjectCategoryProps & TSetterFunction;

const CategoryCard: FunctionComponent<CategoryCardProps> = ({
  setter,
  imageUrl,
  title,
  icon,
  description,
}) => {
  return (
    <ScrollViewWrapper>
      <div className="mb-3 max-w-[42rem] rounded-lg bg-white group-even:flex-row-reverse lg:mx-8 lg:mb-[4rem] lg:flex lg:max-w-5xl lg:shadow-lg">
        <div className="bg-red z-10 flex overflow-hidden lg:w-1/2 lg:scale-110 lg:rounded-lg">
          <Image
            src={imageUrl}
            alt="Project I worked on"
            quality={95}
            className="w-100 h-100 object-cover"
          />
        </div>
        <div className="relative rounded-t-none border px-6 py-12 lg:w-1/2 lg:max-w-5xl lg:rounded-lg lg:px-12">
          <div className="absolute -top-1  left-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-red-600 shadow-lg shadow-red-800/40">
            <span className="text-5xl text-white">{icon}</span>
          </div>
          <h2 className="text-3xl font-bold text-indigo-600">{title}</h2>
          <p className="mt-4 leading-relaxed text-gray-600">{description}</p>
          <div className="mt-8">
            <button
              onClick={() => setter(true)}
              className="rounded bg-gray-900 px-5 py-3 font-semibold text-gray-100 hover:bg-green-600 focus:bg-green-600"
            >
              View Projects
            </button>
          </div>
        </div>
      </div>
    </ScrollViewWrapper>
  );
};

export default CategoryCard;
