import articlesData from "../data/articles.json"
import categoriesData from "../data/categories.json"

// Simulate API delay
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

export const getArticles = async () => {
  await delay(500) // Simulate network delay
  return articlesData
}

export const getCategories = async () => {
  await delay(300)
  return categoriesData
}

export const getArticleById = async (id) => {
  await delay(300)
  return articlesData.find((article) => article.id === Number.parseInt(id))
}

export const getArticlesByCategory = async (categoryId) => {
  await delay(400)
  return articlesData.filter((article) => article.categoryId === Number.parseInt(categoryId))
}
