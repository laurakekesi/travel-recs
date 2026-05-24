import {useEffect, useState, useMemo} from 'react'
import {useParams, Link} from 'react-router-dom'
import {client} from '../sanityClient'
import './CityPage.css'
import Loading from './Loading'
import AddReccoModal from './AddReccoModal'
import RecommendationFilters from './RecommendationFilters'
import RecommendationList from './RecommendationList'
import BestOfSection from './BestOfSection'
import {matchesFilters, sortRecommendations} from '../constants/filters'

function toggleInList(list, value) {
  return list.includes(value) ? list.filter((v) => v !== value) : [...list, value]
}

function CityPage() {
  const {slug} = useParams()
  const [city, setCity] = useState(null)
  const [recommendations, setRecommendations] = useState([])
  const [bestOfEntries, setBestOfEntries] = useState([])
  const [loading, setLoading] = useState(true)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const [categories, setCategories] = useState([])
  const [priceLevels, setPriceLevels] = useState([])
  const [tags, setTags] = useState([])
  const [sortBy, setSortBy] = useState('name-asc')

  useEffect(() => {
    setLoading(true)
    setCategories([])
    setPriceLevels([])
    setTags([])
    setSortBy('name-asc')

    client
      .fetch(
        `*[_type == "city" && slug.current == $slug][0]{
          _id,
          name,
          description,
          country,
          bestOfIntro,
          "imageUrl": image.asset->url
        }`,
        {slug}
      )
      .then((data) => {
        if (!data) {
          setCity(null)
          setLoading(false)
          return
        }
        setCity(data)

        return Promise.all([
          client.fetch(
            `*[_type == "recommendation" && city._ref == $cityId && status == "approved"]{
              _id,
              name,
              slug,
              category,
              restaurantType,
              barType,
              priceLevel,
              mealTypes,
              tags,
              veggieFriendly,
              description,
              address,
              upvotes,
              downvotes,
              "imageUrl": image.asset->url
            }`,
            {cityId: data._id}
          ),
          client.fetch(
            `*[_type == "bestOfEntry" && city._ref == $cityId] | order(sortOrder asc) {
              _id,
              title,
              blurb,
              sortOrder,
              "recommendation": recommendation->{
                _id,
                name,
                slug,
                category,
                priceLevel,
                description,
                "imageUrl": image.asset->url
              }
            }`,
            {cityId: data._id}
          ),
        ])
      })
      .then((result) => {
        if (!result) return
        const [recs, bestOf] = result
        setRecommendations(recs || [])
        setBestOfEntries(bestOf || [])
        setLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [slug])

  const filteredRecommendations = useMemo(() => {
    const filtered = recommendations.filter((recco) =>
      matchesFilters(recco, {categories, priceLevels, tags})
    )
    return sortRecommendations(filtered, sortBy)
  }, [recommendations, categories, priceLevels, tags, sortBy])

  if (loading) return <Loading />
  if (!city) return <div className="city-not-found">City not found</div>

  return (
    <div className="city-wrapper">
      <div className="hero-city-banner">
        {city.imageUrl && <img className="hero-city-banner-image" alt="" src={city.imageUrl} />}
        <h1>{city.name}</h1>
      </div>

      <div className="city-content">
        <Link to="/" className="back-home">
          ← All cities
        </Link>

        {city.description && <p className="city-description">{city.description}</p>}

        <BestOfSection intro={city.bestOfIntro} entries={bestOfEntries} />

        <div className="city-list-header">
          <h2>All recommendations</h2>
          <button type="button" className="add-recco-btn" onClick={() => setIsModalOpen(true)}>
            + Add recommendation
          </button>
        </div>

        <RecommendationFilters
          categories={categories}
          priceLevels={priceLevels}
          tags={tags}
          sortBy={sortBy}
          onToggleCategory={(v) => setCategories((c) => toggleInList(c, v))}
          onTogglePrice={(v) => setPriceLevels((p) => toggleInList(p, v))}
          onToggleTag={(v) => setTags((t) => toggleInList(t, v))}
          onSortChange={setSortBy}
          onClear={() => {
            setCategories([])
            setPriceLevels([])
            setTags([])
          }}
        />

        <p className="results-count">
          {filteredRecommendations.length} of {recommendations.length} places
        </p>

        <RecommendationList recommendations={filteredRecommendations} />
      </div>

      <AddReccoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cityId={city._id}
        cityName={city.name}
      />
    </div>
  )
}

export default CityPage
