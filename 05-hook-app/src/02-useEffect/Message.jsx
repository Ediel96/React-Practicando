import  { useEffect, useState } from 'react'

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
            console.log('se desmonta el componente y el metodo de mousemove')
            // window.removeEventListener('mousemove');
            // setCoords({x: 0, y:0})
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