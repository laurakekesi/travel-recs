import { useState } from 'react';
import { client } from '../sanityClient';
import './AddCityModal.css';

function AddCityModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({
        name: '',
        country: '',
        description: ''
    });
    const [imageFile, setImageFile] = useState(null);
    const [imagePreview, setImagePreview] = useState(null);
    const [submitting, setSubmitting] = useState(false);
    const [success, setSuccess] = useState(false);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            // Create preview
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitting(true);

        try {
            // Create slug from city name
            const slug = formData.name.toLowerCase().replace(/\s+/g, '-');

            // Upload image if provided
            let imageAsset = null;
            if (imageFile) {
                imageAsset = await client.assets.upload('image', imageFile, {
                    filename: imageFile.name
                });
            }

            // Create the city document in Sanity
            const cityDoc = {
                _type: 'city',
                name: formData.name,
                country: formData.country,
                description: formData.description,
                slug: {
                    _type: 'slug',
                    current: slug
                }
            };

            // Add image reference if uploaded
            if (imageAsset) {
                cityDoc.image = {
                    _type: 'image',
                    asset: {
                        _type: 'reference',
                        _ref: imageAsset._id
                    }
                };
            }

            await client.create(cityDoc);

            setSuccess(true);
            setTimeout(() => {
                onClose();
                setSuccess(false);
                setFormData({ name: '', country: '', description: '' });
                setImageFile(null);
                setImagePreview(null);
            }, 2000);
        } catch (error) {
            console.error('Error submitting city:', error);
            alert('Failed to submit city. Please try again.');
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
                        <h2>✓ City submitted!</h2>
                        <p>Thanks for adding a new city. This might take a couple minutes to show up, please hold 🌝</p>
                    </div>
                ) : (
                    <>
                        <h2>Add a New City</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>City Name *</label>
                                <input
                                    type="text"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    required
                                    placeholder="e.g., Tokyo"
                                />
                            </div>

                            <div className="form-group">
                                <label>Country *</label>
                                <input
                                    type="text"
                                    value={formData.country}
                                    onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                                    required
                                    placeholder="e.g., Japan"
                                />
                            </div>

                            <div className="form-group">
                                <label>City Image (optional)</label>

                                {/* Custom button */}
                                <label className="custom-file-button" htmlFor="city-image-upload">
                                    Upload Image
                                </label>

                                {/* Hidden real input */}
                                <input
                                    id="city-image-upload"
                                    className="file-input"
                                    type="file"
                                    accept="image/*"
                                    onChange={handleImageChange}
                                />

                                {/* Preview */}
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
                                    placeholder="Tell us about this city..."
                                    rows="3"
                                />
                            </div>

                            <button type="submit" disabled={submitting} className="submit-btn">
                                {submitting ? 'Submitting...' : 'Submit City'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}

export default AddCityModal;