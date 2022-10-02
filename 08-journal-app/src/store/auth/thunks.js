import { sinInWithGoogle } from '../../firebase/prividers'
import { ckeckingCredentials, logout, login } from "./"

export const ckeckingAuthentication = (email, password) => {
    return async ( dispatch ) => {
        dispatch( ckeckingCredentials() );
    }
}

export const startGoogleSingIn = ()  => {
    return async (dispatch) => {

        dispatch( ckeckingCredentials() );

        const result = await sinInWithGoogle();

        if(!result.ok) dispatch( logout(result.errorMessage) );

        dispatch( login(result) );

    } 
}
