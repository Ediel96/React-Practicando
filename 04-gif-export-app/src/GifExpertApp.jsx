import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

  const [categoy, setCategoy] = useState(['One Punch', 'Dragon Ball'])

  const onAddCategory =  () => {
    setCategoy([...categoy, 'Naruto'])
  }

  return (
    <>
      {/* titulo */}
      <h1>GifExpertApp</h1>
      {/* input  */}
      <AddCategory />
      {/* list item */}
      <button type="button" onClick={onAddCategory}>Agregar</button>

      <ol>
          {categoy.map(categoy => {
            return <li key={categoy}><h2>{categoy}</h2></li>
          } )}
      </ol>


    </>
  )
}
