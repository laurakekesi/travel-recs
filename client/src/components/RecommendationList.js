import {Link} from 'react-router-dom'
import {TAG_LABELS} from '../constants/filters'
import './RecommendationList.css'

function formatCategory(category) {
  if (!category) return ''
  return category.charAt(0).toUpperCase() + category.slice(1)
}

function RecommendationList({recommendations}) {
  if (recommendations.length === 0) {
    return <p className="no-results">No places match your filters. Try clearing a filter.</p>
  }

  return (
    <ul className="recommendation-list">
      {recommendations.map((recco) => (
        <li key={recco._id} className="recommendation-item">
          <Link to={`/recommendation/${recco.slug.current}`} className="recommendation-link">
            {recco.imageUrl && <img src={recco.imageUrl} alt="" className="recommendation-thumb" />}
            <div className="recommendation-details">
              <span className="recommendation-name">{recco.name}</span>
              <span className="recommendation-meta">
                {formatCategory(recco.category)}
                {recco.priceLevel && ` · ${recco.priceLevel}`}
                {recco.restaurantType && ` · ${recco.restaurantType}`}
                {recco.barType && ` · ${recco.barType}`}
              </span>
              {recco.description && <p className="recommendation-desc">{recco.description}</p>}
              {(recco.tags?.length > 0 || recco.veggieFriendly) && (
                <div className="recommendation-tags">
                  {recco.veggieFriendly && !recco.tags?.includes('veggie-friendly') && (
                    <span className="tag-pill">Veggie friendly</span>
                  )}
                  {recco.tags?.map((tag) => (
                    <span key={tag} className="tag-pill">
                      {TAG_LABELS[tag] || tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default RecommendationList
