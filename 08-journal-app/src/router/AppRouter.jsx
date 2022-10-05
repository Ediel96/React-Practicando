import { Navigate, Route, Routes } from "react-router-dom"
import { AuthRouters } from "../auth/routers/AuthRouters"
import { JornalRouters } from "../journal/routes/JornalRouters"
import { CkeckingAuth } from '../ui'

import {useCkeckAuth} from '../hook'

// import { async } from "@firebase/util"

export const AppRouter = () => {

  const {status} = useCkeckAuth()
  

  if( status === 'ckecking' ){
    return <CkeckingAuth/>
  }

  return (
    <Routes>

      {
        (status === 'authenticated')
        ?<Route path="/*" element={ <JornalRouters/>}/>
        :<Route path="/auth/*" element={ <AuthRouters/>}/>
      }
      <Route path="/*" element={ <Navigate to='/auth/login'/> } />

        {/* login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRouters/>}/> */}
  

        {/* Journal app */}
        {/* <Route path="/*" element={ <JornalRouters/>}/> */}
    </Routes>
  )
}
