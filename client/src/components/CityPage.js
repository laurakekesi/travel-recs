import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanityClient";
import './CityPage.css';
import Loading from "./Loading";

function CityPage() {
    const { slug } = useParams();
    const [city, setCity] = useState(null);
    const [recommendations, setRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

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

  if (loading) return <Loading/>
  if (!city) return <div>City not found</div>
  if (city) console.log(city, recommendations);

  return (
    <div>
       <h1>{city.name}</h1>
       { recommendations.map((recco) => {
        const reccoLink = `/recommendation/${recco.slug.current}`;
        return(
            <div>
               <Link to={reccoLink}>{recco.name} - {recco.category}</Link>
            </div>
        )
       })}
    </div>
  )
}

export default CityPage;