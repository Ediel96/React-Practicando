import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";



export const useFetchGeifs = ( category ) => {

    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }


    useEffect(  () => {
        getImages();
        // getGifs(category).then(newImages => setImages(newImages));// este puede ser otra forma de hacerlo
    }, []);

  return (
    {
        images : images,
        isLoading : isLoading
    }
  )
}
