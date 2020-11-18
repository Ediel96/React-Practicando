import React from 'react';
import PropTypes from 'prop-types';


const PrimeraApp = ( {saludo, subtitulo } ) =>{

    return (
        <div>
            <h1>{saludo}</h1>
            {/* <h1>{ JSON.stringify( variable.yerdOld)}</h1> */}
            <p>{subtitulo}</p>
        </div>
        
    );
}

PrimeraApp.propoTypes = {
    saludo: PropTypes.string.isRequired
}

PrimeraApp.defaulfProps ={
    subtitulo: 'soy una perra astuta'
}



export default PrimeraApp;