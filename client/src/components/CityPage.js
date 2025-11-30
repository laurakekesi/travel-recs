import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanityClient";
import './CityPage.css';
import Loading from "./Loading";
import AddReccoModal from "./AddReccoModal";

function CityPage() {
  const { slug } = useParams();
  const [city, setCity] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Fetch city details
    client.fetch(`*[_type == "city" && slug.current == $slug][0]{
    _id,
    name,
    description,
    country,
    "imageUrl": image.asset->url
  }`, { slug })
      .then(data => {
        setCity(data)
        console.log('City data:', data) // Add this to debug

        // Fetch recommendations for this city
        return client.fetch(`*[_type == "recommendation" && city._ref == $cityId && status == "approved"]{
        _id,
        name,
        slug,
        category,
        restaurantType,
        priceLevel,
        mealTypes,
        description,
        address,
        upvotes,
        downvotes,
        "imageUrl": image.asset->url
      } | order(upvotes desc)`, { cityId: data._id })
      })
      .then(recs => {
        console.log('Recommendations:', recs) // Add this to debug
        setRecommendations(recs)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching data:', error)
        setLoading(false)
      })
  }, [slug])

  if (loading) return <Loading />
  if (!city) return <div>City not found</div>
  if (city) console.log(city, recommendations);

  return (
    <div>
      <Link to="/">Take me home 🥺</Link>
      <h1>{city.name}</h1>
      <h3 id="add-recommendation" onClick={() => setIsModalOpen(true)} style={{ cursor: 'pointer' }}>
        Add new recommendation!
      </h3>
      {recommendations.map((recco) => {
        const reccoLink = `/recommendation/${recco.slug.current}`;
        return (
          <div>
            <Link to={reccoLink}>{recco.name} - {recco.category}</Link>
          </div>
        )
      })}
      <AddReccoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        cityId={city._id}
        cityName={city.name}
      />
    </div>
  )
}

export default CityPage;