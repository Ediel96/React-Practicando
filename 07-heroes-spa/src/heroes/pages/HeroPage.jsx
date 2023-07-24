import { useMemo } from "react";
import { getHeroeById } from  "../helpers"
import { Navigate, useNavigate, useParams } from "react-router-dom"

export const HeroPage = () => {

  const {id} = useParams();

  const navigate = useNavigate()

  const hero = useMemo( () => getHeroeById(id), [id] ); // memoriza el heroe cuando cambie el id;

  const onNavigateBack = () => {
    navigate(-1)
  }

  if(!hero){
    return <Navigate to="/marvel"/>
  }

  return (
    <div className="row mt-5">
    <div className="col-4 animate__animated animate__fadeInLeft">
      Hero app
      <img
        src={`/assets/heroes/${id}.jpg`}
        alt={hero.superhero}
        className="img-thumbnail"
      />
    </div>
    <div className="col-8">
      <h3>{ hero.superhero}</h3>
      <ul className="list-group list-group-flush">
        <li className="list-grupo-item"><b>Alter ego:</b> {hero.alter_ego}</li>
        <li className="list-grupo-item"><b>Publisher:</b> {hero.publisher}</li>
        <li className="list-grupo-item"><b>First appearance:</b> {hero.first_appearance}</li>

        <h5 className="mt-3">Characters</h5>
        <p>{hero.characters}</p>

        <button className="btn btn-outline-primary"
        onClick={ onNavigateBack }>
          Regresar
        </button>
      </ul>
    </div>
  </div>
  )
}
