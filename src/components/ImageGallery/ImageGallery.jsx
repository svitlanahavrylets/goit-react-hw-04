import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = () => {
  return (
    //  Якщо зображення є &&
    <div>
      <ul>
        {/* Набір елементів списку із зображеннями */}
        <li>
          <div>
            <ImageCard />
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ImageGallery;
