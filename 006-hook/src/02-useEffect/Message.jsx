import { useEffect, useState } from "react"

export const Message = () => {

    const [coords, setCoords] = useState({x:0 , y:0})

    useEffect(() => {
        //en esta parte se sabe que se creo o llama el componente
      
        const onMouseMove = ( { x, y }) => {
            setCoords({x, y})
        }
      
        window.addEventListener('mousemove', onMouseMove)
    
      return () => {
        //en esta parte se sabe que se destruyo el componente
        window.removeEventListener('mousemove', onMouseMove)
      }
    }, [])
    

  return (
    <>
        <h3>Usuario ya existe</h3>
        {JSON.stringify(coords)}
    </>
  )
}
