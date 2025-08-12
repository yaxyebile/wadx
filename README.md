# NewsHub - Modern News Website Frontend

A fully responsive news website built with React.js, Vite, and Tailwind CSS. Features a clean, modern design with dark mode support and mobile-first approach.

## 🚀 Features

- **Responsive Design**: Mobile-first approach that works perfectly on all devices
- **Dark Mode**: Toggle between light and dark themes with localStorage persistence
- **Modern UI**: Clean, professional design with smooth animations
- **Search Functionality**: Search articles by title, content, or author
- **Category Filtering**: Browse articles by category
- **Article Pages**: Full article view with related articles
- **Performance Optimized**: Fast loading with Vite bundler

## 🛠️ Tech Stack

- **React.js** - Frontend framework
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Lucide React** - Beautiful icons
- **Axios** - HTTP client (configured for local JSON data)

## 📁 Project Structure

\`\`\`
frontend/
├── src/
│   ├── components/     # Reusable UI components
│   ├── pages/         # Page components
│   ├── context/       # React context providers
│   ├── hooks/         # Custom React hooks
│   ├── services/      # API services
│   ├── data/          # Mock data (JSON files)
│   ├── styles/        # Global styles
│   └── assets/        # Static assets
├── public/            # Public assets
└── config files       # Vite, Tailwind, etc.
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the frontend directory:
   \`\`\`bash
   cd frontend
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   \`\`\`

4. Open your browser and visit `http://localhost:3000`

## 📱 Features Overview

### Homepage
- Featured news slider with hero articles
- Latest news grid layout
- Categories section with visual cards
- Responsive navigation with search

### Article Pages
- Full article content with rich formatting
- Author and publication date
- Related articles suggestions
- Social sharing capabilities

### Categories
- Browse all available categories
- Filter articles by specific category
- Category-specific landing pages

### Search
- Real-time search functionality
- Search by title, content, or author
- Paginated search results

### Dark Mode
- System preference detection
- Manual toggle in navigation
- Persistent theme selection

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.cjs`:
\`\`\`js
colors: {
  primary: {
    // Customize primary colors
  }
}
\`\`\`

### Content
Update the mock data in `src/data/`:
- `articles.json` - Article content
- `categories.json` - Category information

### Styling
Global styles are in `src/styles/globals.css` and component-specific styles use Tailwind classes.

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📦 Build for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist/` directory, ready for deployment.

## 🌐 Deployment

This project can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3
- Any web server

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the MIT License.

## 🆘 Support

If you encounter any issues or have questions, please check the documentation or create an issue in the repository.

---

Built with ❤️ using React.js and modern web technologies.
