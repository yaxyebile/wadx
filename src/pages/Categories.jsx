"use client"

import { useState } from "react"
import { useParams } from "react-router-dom"
import { useNews } from "../context/NewsContext"
import NewsCard from "../components/NewsCard"
import CategoryCard from "../components/CategoryCard"
import Pagination from "../components/Pagination"

const Categories = () => {
  const { categoryId } = useParams()
  const { articles, categories, getArticlesByCategory } = useNews()
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 9

  const selectedCategory = categoryId ? categories.find((cat) => cat.id === Number.parseInt(categoryId)) : null
  const displayArticles = selectedCategory ? getArticlesByCategory(categoryId) : articles

  // Pagination
  const totalPages = Math.ceil(displayArticles.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const paginatedArticles = displayArticles.slice(startIndex, startIndex + articlesPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {selectedCategory ? (
        // Category-specific view
        <div className="fade-in">
          <div className="mb-8">
            <div className="flex items-center mb-4">
              <div className="w-4 h-4 rounded-full mr-3" style={{ backgroundColor: selectedCategory.color }} />
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white">{selectedCategory.name}</h1>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-lg">{selectedCategory.description}</p>
          </div>

          {paginatedArticles.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedArticles.map((article) => (
                  <NewsCard key={article.id} article={article} />
                ))}
              </div>

              {totalPages > 1 && (
                <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
              )}
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">No articles found in this category.</p>
            </div>
          )}
        </div>
      ) : (
        // All categories view
        <div className="fade-in">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">All Categories</h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Explore news by category and discover stories that interest you most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>

          <div className="border-t border-gray-200 dark:border-gray-700 pt-8">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Latest Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {paginatedArticles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>

            {totalPages > 1 && (
              <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default Categories
