import React from 'react'
import { getHeoresByPublisher } from '../helpers'
import { HeroCard } from './HeroCard';

export const HeroList = ({publisher}) => {

    const heroes = getHeoresByPublisher(publisher);

  return (

    <div className='row row-cols-1 row-cols-md-3 g-3'>
    {
        heroes.map( heroe => (
            <HeroCard 
                key={heroe.id}
                {...heroe}
            />
        ))
    }
    </div>

  )
}
