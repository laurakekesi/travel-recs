import { useEffect, useState } from 'react';
import { client } from '../sanityClient';
import { useNavigate } from 'react-router-dom';
import './CityList.css';
import Loading from './Loading';
import AddCityModal from './AddCityModal';

function CityList() {
    const navigate = useNavigate();
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        client.fetch(`*[_type == "city"] | order(name asc) {
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

    const filteredCities = cities.filter(city =>
        city.name.toLowerCase().includes(searchTerm.toLowerCase())
    )

    const handleCitySelect = (city) => {
        navigate(`/city/${city.slug.current}`);
    }

    if (loading) return <Loading />

    return (
        <div className="city-search-container">
            <h1>Where are you heading?</h1>

            <div className="search-wrapper">
                <input
                    type="text"
                    id="city-search"
                    className="city-search-input"
                    placeholder="Search for a city..."
                    value={searchTerm}
                    onChange={(e) => {
                        setSearchTerm(e.target.value)
                        setIsDropdownOpen(true)
                    }}
                    onFocus={() => setIsDropdownOpen(true)}
                    onBlur={() => setIsDropdownOpen(false)}
                />

                {isDropdownOpen && filteredCities.length > 0 && (
                    <div className="city-dropdown">
                        {filteredCities.map(city => (
                            <div
                                key={city._id}
                                className="city-option"
                                onMouseDown={() => handleCitySelect(city)}
                            >
                                {city.imageUrl && (
                                    <img src={city.imageUrl} alt={city.name} className="city-thumb" />
                                )}
                                <div className="city-info">
                                    <span className="city-name">{city.name}</span>
                                    {city.country && <span className="city-country">{city.country}</span>}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
            
            <h2>Don't see your city?</h2>
            <h3 id="add-city" onClick={() => setIsModalOpen(true)} style={{cursor: 'pointer'}}>
              Let's add it!
            </h3>

            <AddCityModal 
              isOpen={isModalOpen} 
              onClose={() => setIsModalOpen(false)} 
            />
        </div>
    )
}

export default CityList