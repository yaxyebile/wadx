import { Link } from "react-router-dom"

const CategoryCard = ({ category }) => {
  return (
    <Link to={`/category/${category.id}`} className="block group">
      <div className="relative overflow-hidden rounded-lg bg-white dark:bg-gray-800 shadow-md news-card-hover">
        <div className="aspect-w-16 aspect-h-9">
          <img
            src={category.imageUrl || "/placeholder.svg"}
            alt={category.name}
            className="w-full h-32 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className="text-lg font-semibold mb-1">{category.name}</h3>
          <p className="text-sm text-gray-200 line-clamp-2">{category.description}</p>
        </div>
        <div className="absolute top-2 right-2 w-3 h-3 rounded-full" style={{ backgroundColor: category.color }} />
      </div>
    </Link>
  )
}

export default CategoryCard
