import { Route, Routes, Navigate } from "react-router-dom"
import { JounalPage } from "../pages/JounalPage"

export const JornalRouters = () => {
  return (
    <Routes>
      <Route  path="/" element={ <JounalPage/> }/>
      <Route  path="/*" element={ <Navigate to="/"/> }/>

    </Routes>
  )
}
