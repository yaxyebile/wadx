import { useNews } from "../context/NewsContext"
import NewsCard from "../components/NewsCard"
import CategoryCard from "../components/CategoryCard"
import { ChevronRight } from "lucide-react"
import { Link } from "react-router-dom"

const Home = () => {
  const { articles, categories, loading } = useNews()

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-primary-600"></div>
      </div>
    )
  }

  const featuredArticles = articles.filter((article) => article.featured)
  const latestArticles = articles.slice(0, 6)

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Hero Section - Featured Articles */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">Featured Stories</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {featuredArticles.slice(0, 2).map((article) => (
            <NewsCard key={article.id} article={article} featured={true} />
          ))}
        </div>
      </section>

      {/* Latest News */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Latest News</h2>
          <Link
            to="/categories"
            className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {latestArticles.map((article) => (
            <NewsCard key={article.id} article={article} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Browse Categories</h2>
          <Link
            to="/categories"
            className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
          >
            View All
            <ChevronRight className="h-4 w-4 ml-1" />
          </Link>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Home
