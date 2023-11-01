
import { useState } from 'react';
import './style.css'


const Content = () => {
    const [images, setImages] = useState([
        { id: 1, src: '../assets/images/DSC_0002.JPG' },
        { id: 2, src: '../assets/images/DSC_0003.JPG' },
        { id: 3, src: '../assets/images/DSC_0008.JPG' },
        { id: 4, src: '../assets/images/DSC_0011.JPG' },
        { id: 5, src: '../assets/images/DSC_0012.JPG' },
        { id: 6, src: '../assets/images/DSC_0013.JPG' },
        { id: 7, src: '../assets/images/DSC_0024.JPG' },

    ]);

    const [selectedImages, setSelectedImages] = useState([]);
    const [featuredImage, setFeaturedImage] = useState(null);

    // Function to toggle image selection
    const toggleImageSelection = (id) => {
        if (selectedImages.includes(id)) {
            setSelectedImages(selectedImages.filter((imageId) => imageId !== id));
        } else {
            setSelectedImages([...selectedImages, id]);
        }
    };

    // Function to delete selected images
    const deleteSelectedImages = () => {
        const updatedImages = images.filter((image) => !selectedImages.includes(image.id));
        setImages(updatedImages);
        setSelectedImages([]);
    };

    // Function to set the first image as the featured image
    const setFirstImageAsFeatured = () => {
        if (images.length > 0) {
            setFeaturedImage(images[0]);
        }
    };
    return (
        <div>
            <div className="image-gallery">
                {images.map((image) => (
                    <div
                        key={image.id}
                        className={`image ${selectedImages.includes(image.id) ? 'selected' : ''}`}
                        onClick={() => toggleImageSelection(image.id)}
                    >
                        <img src={image.src} alt={`Image ${image.id}`} />
                    </div>
                ))}
            </div>
            <button onClick={deleteSelectedImages}>Delete Selected</button>
            <button onClick={setFirstImageAsFeatured}>Set Featured</button>
        </div>
    );
};

export default Content;