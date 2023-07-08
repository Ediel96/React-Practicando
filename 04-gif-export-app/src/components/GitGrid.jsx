import { GifItem } from "./GifItem";

import { useFetchGeifs } from "../hooks/useFetchGeifs";

export const GitGrid = ({ category }) => {

    const  {images, isLoading} = useFetchGeifs(category);

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
            {
                images.map( ( image ) => (
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
