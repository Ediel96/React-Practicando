import { useContext } from "react"
import { UserContext } from "./context/userContext"

export const LoginPages = () => {


    const {user, setUser } = useContext(UserContext);


    return (
      <>
          <h1>LoginPages</h1>
          <br />

          <pre>
            {JSON.stringify(user, null, 3)}
          </pre>
      
        <button
        className="btn btn-primary"
        onClick={ ()=> setUser({ id:123, name: 'Juan', email: 'juan@gmail.com'})}>
            Estableser user
        </button>

      </>
    )
  }
  