import { sinInWithGoogle, registerUserWithEmailPassword, loginWithEmailPassword, logoutFirebase } from '../../firebase/prividers'
import { clearNotesLogout } from '../journal';
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

export const startCreatingUserWhithEmailPassword = ({email, password, displayName}) => {

    return async(dispatch) => {
        dispatch( ckeckingCredentials() );

        const {ok, uid,  photoURL, errorMessage} = await registerUserWithEmailPassword({email, password, displayName});

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch( login({uid, displayName, email, photoURL}) )  

    }

}

export const startLoginWithEmailPassword = ({ email, password }) => {
    return async(dispatch) => {

        dispatch( ckeckingCredentials() );

        const result = await loginWithEmailPassword({email, password});
        console.log(result)

        if(!result.ok) return dispatch( logout( result ) );
        dispatch(login(result));

    }
}

export const startLogout = () => {
    return async(dispatch) => {

        await logoutFirebase();
        dispatch(clearNotesLogout())
        dispatch(logout({}));

    }
}