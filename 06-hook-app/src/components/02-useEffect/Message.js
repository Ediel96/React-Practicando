import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCoords] = useState({x: 0, y:0});
    const {x, y}= coords;

    useEffect( ()=>{

    const mouseMover = (e) => {
        const coords = {x: e.x, y: e.y}
        setCoords(coords)
    }

    window.addEventListener('mousemove', mouseMover)

    console.log('componente montado');

        return () => {
            window.removeEventListener('mousemove')
        }

    },[])

  return (
    <div>
        <h3>Eres genial!</h3>
        <p>
            y: {y}
            x: {x}
        </p>
    </div>
  )
}
