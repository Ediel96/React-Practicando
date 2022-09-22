import { Route, Routes } from "react-router-dom";

import { HeroeRoutes } from "../heroes";
import { LoginPage } from "../auth/pages";
import { PrivateRouter } from "./PrivateRouter";
import { PublicRouter } from "./PublicRouter";



export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="login/*" element={
              <PublicRouter>
                <Routes>
                  <Route  path="/*" element={<LoginPage/>}/>
                </Routes>
              </PublicRouter>
            } />
            
            <Route path="/*" element={
              <PrivateRouter>
                <HeroeRoutes/>
              </PrivateRouter>
            } />
        </Routes>
    </>
  )
}
