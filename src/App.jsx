// import { useEffect, useState } from "react";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import ImageModal from "./components/ImageModal/ImageModal";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import SeachBar from "./components/SeachBar/SeachBar";
// import { requestAllImages } from "./services/api";

function App() {
  // requestAllImages();

  // const [images, setImages] = useState(null)

  // useEffect{()=> {
  //   const searchImages = async ()=> {
  //    const {data} = await axios.get("https://api.unsplash.com/")
  //     console.log(data);
  //    console.log(searchImages);

  //   // //  setImages(data)
  //   // }
  // }, []}
  return (
    <>
      <SeachBar onSubmit />

      <LoadMoreBtn />
      <Loader />
      <ErrorMessage />
      <ImageModal />
      <ImageGallery />
    </>
  );
}

export default App;
