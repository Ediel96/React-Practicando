import { Route, Routes } from "react-router-dom";

import { HeroeRoutes } from "../heroes";
import { LoginPage } from "../auth/pages";



export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login" element={<LoginPage/>} />
            
            <Route path="/*" element={<HeroeRoutes/>} />
        </Routes>
    </>
  )
}
