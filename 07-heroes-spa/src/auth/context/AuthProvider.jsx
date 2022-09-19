import React, { useReducer } from 'react'
import { types } from '../types/types'
import { AuthContext } from './AuthContext'
import { authReducer } from './authReducer'


const initialSate = {
  logged: false
}

export const AuthProvider = ({ children }) => {

  const  [ authState, dispatch ] = useReducer( authReducer, initialSate );

  const login = (name = '') => {
    const action = {
      type: types.login,
      payload: {
        id: 'ABC',
        name: name
      }
    }

    dispatch(action);
  }

  

  return (
    <AuthContext.Provider value={{ }}>
        { children }
    </AuthContext.Provider>
  )
}
