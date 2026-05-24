import {useEffect, useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import {client} from '../sanityClient'
import {TAG_LABELS} from '../constants/filters'
import './ReccoPage.css'
import Loading from './Loading'

function ReccoPage() {
  const {slug} = useParams()
  const [recommendation, setRecommendation] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    client
      .fetch(
        `*[_type == "recommendation" && slug.current == $slug][0]{
          _id,
          name,
          description,
          category,
          restaurantType,
          barType,
          priceLevel,
          mealTypes,
          tags,
          veggieFriendly,
          address,
          website,
          upvotes,
          downvotes,
          "imageUrl": image.asset->url,
          "cityName": city->name,
          "citySlug": city->slug.current
        }`,
        {slug}
      )
      .then((data) => {
        setRecommendation(data)
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching recommendation:', error)
        setLoading(false)
      })
  }, [slug])

  if (loading) return <Loading />
  if (!recommendation) return <div className="recco-not-found">Recommendation not found</div>

  const displayTags = [...(recommendation.tags || [])]
  if (recommendation.veggieFriendly && !displayTags.includes('veggie-friendly')) {
    displayTags.unshift('veggie-friendly')
  }

  return (
    <div className="recco-page">
      <Link to={`/city/${recommendation.citySlug}`} className="back-link">
        ← Back to {recommendation.cityName}
      </Link>

      {recommendation.imageUrl && (
        <img src={recommendation.imageUrl} alt="" className="recco-hero-image" />
      )}

      <h1>{recommendation.name}</h1>

      <p className="recco-meta">
        <span className="recco-meta-capitalize">{recommendation.category}</span>
        {recommendation.priceLevel && ` · ${recommendation.priceLevel}`}
        {recommendation.restaurantType && ` · ${recommendation.restaurantType}`}
        {recommendation.barType && ` · ${recommendation.barType}`}
      </p>

      {displayTags.length > 0 && (
        <div className="recco-tags">
          {displayTags.map((tag) => (
            <span key={tag} className="tag-pill">
              {TAG_LABELS[tag] || tag}
            </span>
          ))}
        </div>
      )}

      {recommendation.mealTypes?.length > 0 && (
        <p className="recco-meals">Meals: {recommendation.mealTypes.join(', ')}</p>
      )}

      {recommendation.description && <p className="recco-description">{recommendation.description}</p>}

      {recommendation.address && (
        <p className="recco-address">
          <strong>Address:</strong> {recommendation.address}
        </p>
      )}

      {recommendation.website && (
        <p className="recco-website">
          <a href={recommendation.website.startsWith('http') ? recommendation.website : `https://${recommendation.website}`} target="_blank" rel="noreferrer">
            Website
          </a>
        </p>
      )}
    </div>
  )
}

export default ReccoPage
