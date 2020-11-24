import React, {useState, useEffect} from 'react';
import {GifGridItem} from '../components/GifGridItem';
import {getGifs} from '../helpers/getGifd';

export const GitGrid = ({category}) => {
    
    const [images, setImages] = useState([])

    useEffect( () => {
        getGifs(category)
        .then(imgs => setImages(imgs));
    }, [category])


    return (
        <>
        <h3>{category}</h3>
        <div className="card-grid">
        
                { 
                    images.map( img =>(
                        <GifGridItem 
                        key={img.id}
                        {...img} 
                        />
                    ))
                }
        </div>
        </>
        
    )
}
