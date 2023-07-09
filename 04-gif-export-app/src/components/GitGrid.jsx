import { GifItem } from "./GifItem";

import { useFetchGeifs } from "../hooks/useFetchGeifs";

export const GitGrid = ({ category }) => {

    const  {images, isLoading} = useFetchGeifs(category);

    return (
        <>
            <h3>{category}</h3>
            {
                isLoading && ( <h2>Cargando...</h2> )
            }

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
