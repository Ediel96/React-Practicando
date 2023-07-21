import { Route, Routes } from 'react-router-dom';

import { HeroesRoutes } from "../heroes/router/HeroesRoutes";
import { LoginPage } from '../auth/pages';

export const AppRouter = () => {
  return (

    <Routes>
        <Route path='login' element={ <LoginPage /> } />
        <Route path='/*' element={ <HeroesRoutes/> } />
    </Routes>

  )
}
