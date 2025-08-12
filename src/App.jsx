import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { ThemeProvider } from "./context/ThemeContext"
import { NewsProvider } from "./context/NewsContext"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import Article from "./pages/Article"
import Categories from "./pages/Categories"
import SearchResults from "./pages/SearchResults"
import NotFound from "./pages/NotFound"
import "./styles/globals.css"

function App() {
  return (
    <ThemeProvider>
      <NewsProvider>
        <Router>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navbar />
            <main className="pt-16">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/article/:id" element={<Article />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/category/:categoryId" element={<Categories />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </Router>
      </NewsProvider>
    </ThemeProvider>
  )
}

export default App
