"use client";

import { FunctionComponent, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useSectionInView } from "@/hooks/hooks";
import ArticleCard from "./ArticleCard";
import { articleData } from "@/lib/data";
import SearchBar from "./ui/SearchBar";
import SectionHeading from "./ui/SectionHeading";

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
        <AnimatePresence>
          {filteredArticles.map((article, index) => {
            return (
              <motion.div
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  delay: 0.1 * index,
                  duration: 0.2,
                  ease: "easeInOut",
                }}
                key={article.id + index + article.link}
                exit={{
                  scale: 0.85,
                  opacity: 0,
                  transition: { duration: 0.15 },
                }}
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
