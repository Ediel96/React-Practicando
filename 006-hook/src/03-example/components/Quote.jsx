import { useLayoutEffect, useRef, useState } from "react"

export const Quote = ({quote, author}) => {

   const pRef = useRef();

   const [boxSixe, setBoxSixe] = useState({ width: 0 , heigth: 0 })

  useLayoutEffect(() => {
    const { width, heigth } = pRef.current.getBoundingClientRect();
    setBoxSixe({width, heigth})
  }, [quote])

  return (
    <>
      <blockquote className="blockquote text-end"
          style={{display: 'flex'}}>
          <p ref={pRef} className="mb-1">{quote}</p>
          <footer className='blockquote-footer'> {author}</footer>
      </blockquote>

      <code> {JSON.stringify(boxSixe)}</code>
    </>
  )
}
