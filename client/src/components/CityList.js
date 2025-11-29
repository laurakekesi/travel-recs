import { useEffect, useState } from 'react'
import { client } from '../sanityClient'

function CityList() {
  const [cities, setCities] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // GROQ query to fetch all cities
    client.fetch(`*[_type == "city"]{
      _id,
      name,
      slug,
      description,
      country,
      "imageUrl": image.asset->url
    }`)
      .then(data => {
        setCities(data)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching cities:', error)
        setLoading(false)
      })
  }, [])

  if (loading) return <div>Loading cities...</div>

  return (
    <div>
      <h1>Cities</h1>
      <div className="city-grid">
        {cities.map(city => (
          <div key={city._id} className="city-card">
            {city.imageUrl && <img src={city.imageUrl} alt={city.name} />}
            <h2>{city.name}</h2>
            {city.country && <p>{city.country}</p>}
            {city.description && <p>{city.description}</p>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default CityList