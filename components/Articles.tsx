"use client";

import { FunctionComponent, useState } from "react";
import { AnimatePresence, useReducedMotion, motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import ArticleCard from "./ArticleCard";
import { articleData } from "@/lib/data";
import SearchBar from "./ui/SearchBar";
import SectionHeading from "./ui/SectionHeading";
import { cardFadeEnterExit } from "@/animations/containers";

const Articles: FunctionComponent = () => {
  const [articlesSearch, setArticlesSearch] = useState("");
  const { ref } = useSectionInView("Articles");

  const filteredArticles = articleData.filter(
    (article) =>
      article.title.toLowerCase().includes(articlesSearch.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(articlesSearch.toLowerCase()),
  );

  const shouldReduceMotion = useReducedMotion();

  const animation = shouldReduceMotion
    ? { initial: { scale: 1, opacity: 1 } }
    : cardFadeEnterExit;

  return (
    <section
      id="articles"
      ref={ref}
      className="mb-28 w-full max-w-[108rem] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My Articles</SectionHeading>
      <SearchBar value={articlesSearch} setValue={setArticlesSearch} />
      <div className="flex w-full flex-wrap justify-center gap-2">
        <AnimatePresence>
          {filteredArticles.map((article, index) => {
            return (
              <motion.div
                {...animation}
                transition={{ delay: 0.1 * index }}
                key={article.id + index + article.link}
              >
                <ArticleCard {...article} key={index + article.id} />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Articles;
