import React, { useReducer } from 'react'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'


const initialSate = {
  logged: false
}

export const AuthProvider = ({ children }) => {

  const  [ authState, dispatch ] = useReducer( authReducer, initialSate );

  return (
    <AuthContext.Provider value={{ }}>
        { children }
    </AuthContext.Provider>
  )
}
