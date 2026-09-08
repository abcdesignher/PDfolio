import { articles } from '../data/articles'
import { siteContent } from '../data/siteContent'
import ArticleCard from '../components/ArticleCard'

export default function Articles() {
  const { articles: content } = siteContent

  return (
    <section
      id="thinking"
      className="section articles-section"
      aria-labelledby="articles-heading"
    >
      <div className="section-head">
        <div>
          <p className="eyebrow">{content.eyebrow}</p>
          <h2 id="articles-heading">{content.heading}</h2>
        </div>
        <p className="lede">{content.intro}</p>
      </div>

      <div className="container">
        <ul className="article-list" aria-label={content.label}>
          {articles.map((article, i) => (
            <li key={article.id}>
              <ArticleCard article={article} index={i} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}