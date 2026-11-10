"use client";

import { useState, useMemo } from "react";
import { type Article, categories } from "@/content/articles";
import { ArticleCard, CategoryFilter, SearchInput } from "@/components/article-components";

export function BlogHubClient({ initialArticles }: { initialArticles: Article[] }) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      // Category filter
      if (activeCategory && article.category !== activeCategory) {
        return false;
      }
      // Search filter
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = article.title.toLowerCase().includes(q);
        const matchesDesc = article.description.toLowerCase().includes(q);
        const matchesCategory = article.category.toLowerCase().includes(q);
        if (!matchesTitle && !matchesDesc && !matchesCategory) {
          return false;
        }
      }
      return true;
    });
  }, [initialArticles, activeCategory, searchQuery]);

  return (
    <div className="space-y-10">
      {/* Search and Category Filters */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-8 border-b border-line">
        <CategoryFilter
          activeCategory={activeCategory || undefined}
          onSelect={(slug) => setActiveCategory(slug)}
        />
        <SearchInput value={searchQuery} onChange={setSearchQuery} />
      </div>

      {/* Articles Grid */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      ) : (
        <div className="rounded-3xl border border-line bg-surface p-12 text-center max-w-md mx-auto space-y-3">
          <p className="text-sm font-semibold text-fg">No articles match your criteria</p>
          <p className="text-xs text-muted">
            Try clearing your search query or selecting a different category.
          </p>
          <button
            type="button"
            onClick={() => {
              setActiveCategory(null);
              setSearchQuery("");
            }}
            className="text-xs font-semibold text-accent hover:underline cursor-pointer"
          >
            Reset filters
          </button>
        </div>
      )}
    </div>
  );
}
