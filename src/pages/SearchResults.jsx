"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom"
import { useNews } from "../context/NewsContext"
import NewsCard from "../components/NewsCard"
import SearchBar from "../components/SearchBar"
import Pagination from "../components/Pagination"
import { Search } from "lucide-react"

const SearchResults = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const { searchArticles } = useNews()
  const [currentPage, setCurrentPage] = useState(1)
  const articlesPerPage = 9

  const query = searchParams.get("q") || ""
  const searchResults = searchArticles(query)

  // Reset page when search query changes
  useEffect(() => {
    setCurrentPage(1)
  }, [query])

  const handleSearch = (newQuery) => {
    setSearchParams({ q: newQuery })
  }

  // Pagination
  const totalPages = Math.ceil(searchResults.length / articlesPerPage)
  const startIndex = (currentPage - 1) * articlesPerPage
  const paginatedResults = searchResults.slice(startIndex, startIndex + articlesPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="fade-in">
        {/* Search header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">Search Results</h1>
          <div className="max-w-2xl">
            <SearchBar onSearch={handleSearch} placeholder="Search articles..." />
          </div>
        </div>

        {/* Search results */}
        {query ? (
          <div>
            <div className="mb-6">
              <p className="text-gray-600 dark:text-gray-400">
                {searchResults.length > 0 ? (
                  <>
                    Found <span className="font-semibold">{searchResults.length}</span> result
                    {searchResults.length !== 1 ? "s" : ""} for "<span className="font-semibold">{query}</span>"
                  </>
                ) : (
                  <>
                    No results found for "<span className="font-semibold">{query}</span>"
                  </>
                )}
              </p>
            </div>

            {searchResults.length > 0 ? (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {paginatedResults.map((article) => (
                    <NewsCard key={article.id} article={article} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">No articles found</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Try adjusting your search terms or browse our categories.
                </p>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12">
            <Search className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">Start searching</h3>
            <p className="text-gray-600 dark:text-gray-400">Enter a search term to find articles that interest you.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SearchResults
