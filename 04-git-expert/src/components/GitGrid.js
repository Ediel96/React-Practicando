import React from 'react';
import {useFetchGifs} from '../hooks/useFetchGifs'
import {GifGridItem} from '../components/GifGridItem';

export const GitGrid = ({category}) => {
    
    // const [images, setImages] = useState([])
    
    const  { data:images ,loading } = useFetchGifs( category );

    // useEffect( () => {
    //     getGifs(category)
    //     .then(imgs => setImages(imgs));
    // }, [category])


    return (
        <>
        <h3>{category}</h3>
            
            {loading && <p>loading..</p>}
            
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
