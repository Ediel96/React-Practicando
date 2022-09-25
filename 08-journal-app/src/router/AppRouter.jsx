import { Route, Routes } from "react-router-dom"
import { AuthRouters } from "../auth/routers/AuthRouters"
import { JornalRouters } from "../journal/routes/JornalRouters"

export const AppRouter = () => {
  return (
    <Routes>
        {/* login y Registro */}
        <Route path="/auth/*" element={ <AuthRouters/>}/>
  

        {/* Journal app */}
        <Route path="/" element={ <JornalRouters/>}/>
        <Route path="/*" element={ <JornalRouters/>}/>
    </Routes>
  )
}
