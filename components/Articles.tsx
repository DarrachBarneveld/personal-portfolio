"use client";

import { FunctionComponent, useState } from "react";
import SectionHeading from "./ui/SectionHeading";
import { skillsData, stackData } from "@/lib/data";
import { useSectionInView } from "@/hooks/hooks";
import { AnimatePresence, motion } from "framer-motion";
import { staggeredFadeUp, zoomOut } from "@/animations/variants";
import { GiStack } from "react-icons/gi";
import { FaCode } from "react-icons/fa6";

import StackCard from "./ui/StackCard";
import ArticleCard from "./ArticleCard";

import { articleData } from "@/lib/data";
import SearchBar from "./ui/SearchBar";

const Articles: FunctionComponent = () => {
  const [articlesSearch, setArticlesSearch] = useState("");
  const { ref } = useSectionInView("Articles");

  const filteredArticles = articleData.filter(
    (article) =>
      article.title.toLowerCase().includes(articlesSearch.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(articlesSearch.toLowerCase()),
  );

  return (
    <section
      id="articles"
      ref={ref}
      className="mb-28 max-w-[108rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Articles</SectionHeading>
      <SearchBar value={articlesSearch} setValue={setArticlesSearch} />
      <div className="flex w-full flex-wrap justify-center gap-2">
        {filteredArticles.map((article, index) => (
          <ArticleCard {...article} key={index + article.id} />
        ))}
      </div>
    </section>
  );
};

export default Articles;
