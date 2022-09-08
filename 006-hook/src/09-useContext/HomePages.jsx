import { useContext } from "react";
import { UserContext } from "./context/userContext"



export const HomePages = () => {

    const {user} = useContext(UserContext);

    return (
      <>
          <h1>HomePages <small>{user?.name}</small></h1>
          <br />

          <pre>
            {JSON.stringify(user, null, 3)}
          </pre>

          <button className="btn btn-primary">
            Establecer Usuario
          </button>
      
      </>
    )
  }
  