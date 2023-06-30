import { useState } from "react";
import { AddCategory, GitGrid } from "./components";

export const GifExpertApp = () => {

  const [categoy, setCategoy] = useState(['One Punch'])

  const onAddCategory =  (newCategory) => {
    if(categoy.includes(newCategory)) return;
    setCategoy([ newCategory, ...categoy])
  }

  return (
    <>
      <h1>GifExpertApp</h1>

      <AddCategory
        // setCategoy={ setCategoy }
        onNewCategory={ (event) =>  onAddCategory(event) }
      />


      <ol>
          {categoy.map(categoy =>
              (
                <GitGrid key={categoy} category={categoy}/>
              )
            )
          }
      </ol>

    </>
  )
}
