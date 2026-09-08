export default function ArticleCard({ article, index }) {
  const label = `${article.title} — external link, opens in a new tab`
  return (
    <a
      className="article-card"
      href={article.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
    >
      <span className="article-card-top">
        <span className="article-card-index">0{index + 1}</span>
        <span className="article-card-ext" aria-hidden="true">
          ↗
        </span>
      </span>
      <span className="article-card-body">
        <span className="article-card-cat">{article.category}</span>
        <span className="article-card-title">{article.title}</span>
        <span className="article-card-desc">{article.description}</span>
      </span>
      <span className="article-card-foot">
        {article.date && <span className="article-card-date">{article.date}</span>}
        <span className="article-card-read">Read on Medium →</span>
      </span>
    </a>
  )
}