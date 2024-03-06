import { FunctionComponent } from "react";
import coduImage from "@/public/images/codu.png";
import Image from "next/image";
import { articleData } from "@/lib/data";

type ArticleCardProps = (typeof articleData)[number];

const ArticleCard: FunctionComponent<ArticleCardProps> = ({
  title,
  excerpt,
  published,
  websiteImage,
  websiteText,
  imageUrl,
  link,
}) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Link to article"
      className="group outline-none"
    >
      <article className="flex w-full max-w-md flex-col overflow-hidden rounded-lg border-2 shadow-lg hover:cursor-pointer hover:border-indigo-500 hover:bg-gray-200 group-focus-within:ring-indigo-500 group-focus:bg-gray-200 group-focus:outline-none group-focus:ring-2 group-focus:ring-indigo-500">
        <img
          src={imageUrl}
          alt="Article Image"
          className="h-48 w-full object-cover"
        />
        <div className="flex flex-grow flex-col justify-between p-6 pt-3">
          <div>
            <h2 className="mb-2 border-b pb-1 text-xl font-bold text-indigo-950">
              {title}
            </h2>
            <p className="mb-4 leading-relaxed text-gray-700">{excerpt}</p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Image
                quality={80}
                src={websiteImage}
                alt="Avatar"
                className="mr-2 h-8 w-8 rounded-full object-cover"
              />
              <span className="font-semibold text-gray-800">{websiteText}</span>
            </div>
            <strong className="text-indigo-600">{published}</strong>
          </div>
        </div>
      </article>
    </a>
  );
};

export default ArticleCard;
