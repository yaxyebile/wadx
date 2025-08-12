"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { getArticles, getCategories } from "../services/api"

const NewsContext = createContext()

export const useNews = () => {
  const context = useContext(NewsContext)
  if (!context) {
    throw new Error("useNews must be used within a NewsProvider")
  }
  return context
}

export const NewsProvider = ({ children }) => {
  const [articles, setArticles] = useState([])
  const [categories, setCategories] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [articlesData, categoriesData] = await Promise.all([getArticles(), getCategories()])
        setArticles(articlesData)
        setCategories(categoriesData)
      } catch (error) {
        console.error("Error fetching data:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchData()
  }, [])

  const getArticleById = (id) => {
    return articles.find((article) => article.id === Number.parseInt(id))
  }

  const getArticlesByCategory = (categoryId) => {
    return articles.filter((article) => article.categoryId === Number.parseInt(categoryId))
  }

  const searchArticles = (query) => {
    if (!query) return articles
    return articles.filter(
      (article) =>
        article.title.toLowerCase().includes(query.toLowerCase()) ||
        article.content.toLowerCase().includes(query.toLowerCase()) ||
        article.author.toLowerCase().includes(query.toLowerCase()),
    )
  }

  return (
    <NewsContext.Provider
      value={{
        articles,
        categories,
        loading,
        searchQuery,
        setSearchQuery,
        getArticleById,
        getArticlesByCategory,
        searchArticles,
      }}
    >
      {children}
    </NewsContext.Provider>
  )
}
