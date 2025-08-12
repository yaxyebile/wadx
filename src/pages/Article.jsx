"use client"
import { useParams, Link } from "react-router-dom"
import { useNews } from "../context/NewsContext"
import { Clock, User, ArrowLeft, Share2 } from "lucide-react"
import NewsCard from "../components/NewsCard"

const Article = () => {
  const { id } = useParams()
  const { getArticleById, articles, categories } = useNews()

  const article = getArticleById(id)

  if (!article) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Article not found</h1>
          <Link to="/" className="text-primary-600 hover:text-primary-700 transition-colors">
            Return to homepage
          </Link>
        </div>
      </div>
    )
  }

  const category = categories.find((cat) => cat.id === article.categoryId)
  const relatedArticles = articles.filter((a) => a.categoryId === article.categoryId && a.id !== article.id).slice(0, 3)

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Back button */}
      <Link
        to="/"
        className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors mb-6"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to articles
      </Link>

      {/* Article header */}
      <article className="fade-in">
        <div className="mb-6">
          {category && (
            <Link
              to={`/category/${category.id}`}
              className="inline-block px-3 py-1 text-sm font-medium rounded-full mb-4 transition-colors"
              style={{
                backgroundColor: category.color + "20",
                color: category.color,
              }}
            >
              {category.name}
            </Link>
          )}
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4 leading-tight">
            {article.title}
          </h1>

          <div className="flex flex-wrap items-center gap-4 text-gray-600 dark:text-gray-400 mb-6">
            <div className="flex items-center space-x-1">
              <User className="h-4 w-4" />
              <span>{article.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>{formatDate(article.publishedAt)}</span>
            </div>
            <span>{article.readTime}</span>
            <button className="flex items-center space-x-1 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors">
              <Share2 className="h-4 w-4" />
              <span>Share</span>
            </button>
          </div>
        </div>

        {/* Featured image */}
        <div className="mb-8">
          <img
            src={article.imageUrl || "/placeholder.svg"}
            alt={article.title}
            className="w-full h-64 md:h-96 object-cover rounded-xl"
          />
        </div>

        {/* Article content */}
        <div className="prose prose-lg dark:prose-invert max-w-none">
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700 dark:text-gray-300 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>
      </article>

      {/* Related articles */}
      {relatedArticles.length > 0 && (
        <section className="mt-16 pt-8 border-t border-gray-200 dark:border-gray-700">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Related Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedArticles.map((relatedArticle) => (
              <NewsCard key={relatedArticle.id} article={relatedArticle} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}

export default Article
