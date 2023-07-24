/* eslint-disable */
import { useMemo } from 'react';
import { getHeroesByPublisher } from '../helpers/getHeroesByPublisher';
import { HeroCard } from './';
 

export const HeroList = ({ publisher }) => {

    const heroes = useMemo( () => getHeroesByPublisher( publisher ));
    console.log(heroes)

  return (
    <div className='row row-cols-1 row-cols-md-3 g-3 animate__animated animate__rubberBand'>
        {
            heroes.map( heroe => (
                <HeroCard 
                    key={heroe.id}
                    {...heroe}/>
            ))
        }

    </div>
  )
}
