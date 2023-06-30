import { useEffect, useState } from "react";
import { GifItem } from "./GifItem";

import { getGifs } from "../helpers/getGifs";


export const GitGrid = ({ category }) => {

    const [images, setImages] = useState([])

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
    }


    useEffect(  () => {
        getImages();
        // getGifs(category).then(newImages => setImages(newImages));// este puede ser otra forma de hacerlo
    }, []);


    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            {
                images.map((image) => (
                    <GifItem 
                        key={image.id} 
                        {...image} />
                    )
                )
            }
            </div>
        </>
    )

}
