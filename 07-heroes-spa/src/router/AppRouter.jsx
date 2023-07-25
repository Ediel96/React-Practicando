import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from "../heroes/router/HeroesRoutes";
import { LoginPage } from '../auth/pages';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (

    <Routes>
        {/* <Route path='login' element={ <LoginPage /> } /> */}

        <Route path='/login' element={
          <PublicRoute >
            <LoginPage />
          </PublicRoute>
        } />

          {/* Se puede Agregar mas rutas*/}
        {/* <Route path='login/*' element={
          <PublicRoute >
            <Routes>
              <Route path='/*' element = {<LoginPage /> } />
            </Routes>
          </PublicRoute>
        } /> */}


        <Route path='/*' element={
          <PrivateRoute>
            <HeroesRoutes />
          </PrivateRoute>
        } />

        {/* <Route path='/*' element={ <HeroesRoutes/> } /> */}
    </Routes>

  )
}
