import React, {memo} from 'react'

export const Small = memo(({value}) => {

    console.log('se esta volviendo a cargar!!')

  return (
    <small>
        {value}
    </small>
  )
})
