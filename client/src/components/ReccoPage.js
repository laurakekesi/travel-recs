import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { client } from "../sanityClient";
import './ReccoPage.css';
import Loading from "./Loading";

function ReccoPage() {
    const { slug } = useParams();
    const [recommendation, setRecommendation] = useState(null);
    const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch single recommendation details
    client.fetch(`*[_type == "recommendation" && slug.current == $slug][0]{
      _id,
      name,
      description,
      category,
      restaurantType,
      priceLevel,
      mealTypes,
      address,
      upvotes,
      downvotes,
      "imageUrl": image.asset->url,
      "cityName": city->name,
      "citySlug": city->slug.current
    }`, { slug })
      .then(data => {
        setRecommendation(data)
        setLoading(false)
        console.log('Recommendation data:', data)
      })
      .catch(error => {
        console.error('Error fetching recommendation:', error)
        setLoading(false)
      })
  }, [slug])

  if (loading) return <Loading/>
  if (!recommendation) return <div>Recommendation not found</div>

  return (
    <div className="recco-page">
      <Link to={`/city/${recommendation.citySlug}`} className="back-link">
        ← Back to {recommendation.cityName}
      </Link>
      {recommendation.name}
    </div>
  )
}

export default ReccoPage;