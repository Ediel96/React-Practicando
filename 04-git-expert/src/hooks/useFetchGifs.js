import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifd';

export const useFetchGifs = (category) => {
    
    const [state, setSate] = useState({
        data: [],
        loading:true
    })

    useEffect(() => {
        getGifs(category)
        .then(imgs => {
            setSate({
                data: imgs,
                loading:false
            });
        });
    }, [category]);

    return state;
}