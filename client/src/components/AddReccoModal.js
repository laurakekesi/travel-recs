import { useState } from 'react';
import { client } from '../sanityClient';
import './AddReccoModal.css';

function AddReccoModal({ isOpen, onClose, cityId, cityName }) {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        restaurantType: '',
        barType: '',
        priceLevel: '',
        mealTypes: [],
        description: '',
        address: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleMealTypeToggle = (mealType) => {
        setFormData(prev => ({
            ...prev,
            mealTypes: prev.mealTypes.includes(mealType)
                ? prev.mealTypes.filter(m => m !== mealType)
                : [...prev.mealTypes, mealType]
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            const slug = formData.name.toLowerCase().replace(/\s+/g, '-');

            let imageAsset = null;
            if (imageFile) {
                imageAsset = await client.assets.upload('image', imageFile, {
                    filename: imageFile.name
                });
            }

            const recommendationDoc = {
                _type: 'recommendation',
                name: formData.name,
                website: formData.website,
                category: formData.category,
                description: formData.description,
                address: formData.address,
                status: 'pending',
                upvotes: 0,
                downvotes: 0,
                slug: {
                    _type: 'slug',
                    current: slug
                },
                city: {
                    _type: 'reference',
                    _ref: cityId
                }
            };

            // Add optional fields only if they have values
            if (formData.website) {
                recommendationDoc.website = formData.website;
            }
            if (formData.restaurantType) {
                recommendationDoc.restaurantType = formData.restaurantType;
            }
            if (formData.veggieFriendly !== null) {
                recommendationDoc.veggieFriendly = formData.veggieFriendly;
            }
            if (formData.barType) {
                recommendationDoc.barType = formData.barType;
            }
            if (formData.priceLevel) {
                recommendationDoc.priceLevel = formData.priceLevel;
            }
            if (formData.mealTypes.length > 0) {
                recommendationDoc.mealTypes = formData.mealTypes;
            }

            if (imageAsset) {
                recommendationDoc.image = {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageAsset._id
                    }
                };
            }

            await client.create(recommendationDoc);

            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setFormData({
                    name: '',
                    website: '',
                    category: '',
                    restaurantType: '',
                    veggieFriendly: null,
                    barType: '',
                    priceLevel: '',
                    mealTypes: [],
                    description: '',
                    address: ''
                });
                setImageFile(null);
                setImagePreview(null);
            }, 2000);
        } catch (error) {
            console.error('Error submitting recommendation:', error);
            alert('Failed to submit recommendation. Please try again.');
        } finally {
            setSubmitting(false);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>×</button>

                {success ? (
                    <div className="success-message">
                        <h2>✓ Recommendation submitted!</h2>
                        <p>Thanks for adding to {cityName}! It'll show up once approved 🌝</p>
                    </div>
                ) : (
                    <>
                        <h2>Add a Recommendation to {cityName}</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Place Name *</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    placeholder="e.g., Dollarama"
                                />
                            </div>

                            <div className="form-group">
                                <label>Website</label>
                                <input
                                    type="text"
                                    value={formData.website}
                                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                                    placeholder="www.dollarama.com"
                                />
                            </div>

                            <div className="form-group">
                                <label>Category *</label>
                                <select
                                    value={formData.category}
                                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                                    required
                                >
                                    <option value="">Select a category</option>
                                    <option value="restaurant">Restaurant</option>
                                    <option value="cafe">Cafe</option>
                                    <option value="bar">Bar</option>
                                    <option value="bakery">Bakery</option>
                                    <option value="activity">Activity</option>
                                </select>
                            </div>

                            {formData.category === 'restaurant' && (
                                <>
                                    <div className="form-group">
                                        <label>Restaurant Type</label>
                                        <select
                                            value={formData.restaurantType}
                                            onChange={(e) => setFormData({ ...formData, restaurantType: e.target.value })}
                                        >
                                            <option value="">Select type</option>
                                            <option value="american">American</option>
                                            <option value="argentine">Argentine</option>
                                            <option value="chinese">Chinese</option>
                                            <option value="deli">Deli</option>
                                            <option value="french">French</option>
                                            <option value="greek">Greek</option>
                                            <option value="indian">Indian</option>
                                            <option value="irish">Irish</option>
                                            <option value="italian">Italian</option>
                                            <option value="japanese">Japanese</option>
                                            <option value="korean">Korean</option>
                                            <option value="lebanese">Lebanese</option>
                                            <option value="mediterranean">Mediterranean</option>
                                            <option value="mexican">Mexican</option>
                                            <option value="portuguese">Portuguese</option>
                                            <option value="thai">Thai</option>
                                            <option value="turkish">Turkish</option>
                                            <option value="vietnamese">Vietnamese</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group">
                                        <label>Meal Types</label>
                                        <div className="checkbox-group">
                                            {['breakfast', 'brunch', 'lunch', 'snacks', 'dinner'].map(meal => (
                                                <label key={meal} className="checkbox-label">
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.mealTypes.includes(meal)}
                                                        onChange={() => handleMealTypeToggle(meal)}
                                                    />
                                                    {meal.charAt(0).toUpperCase() + meal.slice(1)}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <label>Veggie friendly? *</label>
                                        <div className="radio-group">
                                            <label className="radio-label">
                                                <input
                                                    type="radio"
                                                    name="veggieFriendly"
                                                    value="true"
                                                    checked={formData.veggieFriendly === true}
                                                    onChange={() => setFormData({ ...formData, veggieFriendly: true })}
                                                    required
                                                />
                                                Yes
                                            </label>
                                            <label className="radio-label">
                                                <input
                                                    type="radio"
                                                    name="veggieFriendly"
                                                    value="false"
                                                    checked={formData.veggieFriendly === false}
                                                    onChange={() => setFormData({ ...formData, veggieFriendly: false })}
                                                    required
                                                />
                                                No
                                            </label>
                                        </div>
                                    </div>
                                </>
                            )}

                            {formData.category === 'bar' && (
                                <div className="form-group">
                                    <label>Bar Type</label>
                                    <select
                                        value={formData.barType}
                                        onChange={(e) => setFormData({ ...formData, barType: e.target.value })}
                                    >
                                        <option value="">Select type</option>
                                        <option value="cocktail">Cocktail</option>
                                        <option value="dive">Dive</option>
                                        <option value="pub">Pub</option>
                                        <option value="sports">Sports</option>
                                        <option value="wine">Wine</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                            )}

                            <div className="form-group">
                                <label>Price Level</label>
                                <select
                                    value={formData.priceLevel}
                                    onChange={(e) => setFormData({ ...formData, priceLevel: e.target.value })}
                                >
                                    <option value="">Select price level</option>
                                    <option value="$">$</option>
                                    <option value="$$">$$</option>
                                    <option value="$$$">$$$</option>
                                    <option value="$$$$">$$$$</option>
                                </select>
                            </div>

                            <div className="form-group">
                                <label>Address</label>
                                <input
                                    type="text"
                                    value={formData.address}
                                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                                    placeholder="123 Main St"
                                />
                            </div>

                            <div className="form-group">
                                <label>Image (optional)</label>
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />
                                {imagePreview && (
                                    <div className="image-preview">
                                        <img src={imagePreview} alt="Preview" />
                                    </div>
                                )}
                            </div>

                            <div className="form-group">
                                <label>Description (optional)</label>
                                <textarea
                                    value={formData.description}
                                    onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                    placeholder="Tell us about this place..."
                                    rows="3"
                                />
                            </div>

                            <button type="submit" disabled={submitting} className="submit-btn">
                                {submitting ? 'Submitting...' : 'Submit Recommendation'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default AddReccoModal;