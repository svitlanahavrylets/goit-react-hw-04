import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, openModal }) => {
  return (
    <ul>
      {images.map((image) => (
        <li key={image.id} onClick={() => openModal(image)}>
          <ImageCard image={image} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
