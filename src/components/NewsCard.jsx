import { Link } from "react-router-dom"
import { Clock, User } from "lucide-react"

const NewsCard = ({ article, featured = false }) => {
  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (featured) {
    return (
      <Link to={`/article/${article.id}`} className="block group">
        <div className="relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg news-card-hover">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={article.imageUrl || "/placeholder.svg"}
              alt={article.title}
              className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
            <h2 className="text-2xl font-bold mb-2 line-clamp-2">{article.title}</h2>
            <div className="flex items-center space-x-4 text-sm text-gray-200">
              <div className="flex items-center space-x-1">
                <User className="h-4 w-4" />
                <span>{article.author}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-4 w-4" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </Link>
    )
  }

  return (
    <Link to={`/article/${article.id}`} className="block group">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden news-card-hover">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
            {article.title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-3 line-clamp-2">
            {article.content.substring(0, 120)}...
          </p>
          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
            <div className="flex items-center space-x-1">
              <User className="h-3 w-3" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <Clock className="h-3 w-3" />
                <span>{formatDate(article.publishedAt)}</span>
              </div>
              <span>{article.readTime}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default NewsCard
