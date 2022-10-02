
import { GoogleAuthProvider, signInWithPopup }  from'firebase/auth';
import { FirebaseAuth } from './config';

const googleProvider = new GoogleAuthProvider();

export const sinInWithGoogle = async() => {
    try {

        const result = await signInWithPopup(FirebaseAuth, googleProvider);
        
        //obtener credenciales de google
        //const credentials = GoogleAuthProvider.credentialFromResult(result);

        const {displayName, email, photoURL, uid} = result.user;
        return  {
            ok: true,
            displayName, email, photoURL, uid
        }

    } catch (error) {
        console.error({error});

        const errorCode = error.code;
        const errorMessage = error.message;

        return {
            ok: false.valueOf,
            errorMessage
        }

    }
}