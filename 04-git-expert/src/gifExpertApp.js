import React, {useState} from 'react';
import { AddCategory } from './components/AddCategory';
import {GitGrid} from './components/GitGrid';
// import ReactDOM  from 'react-dom';

const GifExpertApp = ()=>{

    const [categories, setCategories] = useState(['One Punch']);

    return(
        <div>
            <h2>GifExpertApp</h2>
            
            <AddCategory setCategories = {setCategories}/>
            <hr/>
            {/* <button onClick={hundleAdd}>  Agregar </button> */}
           
            {
                categories.map(category => (
                    <GitGrid 
                    key ={category}
                    category = {category}/>
                ))
            }
           
        </div>
    ) 
}

export default GifExpertApp;