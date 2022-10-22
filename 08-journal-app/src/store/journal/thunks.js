
import { collection, doc, setDoc } from 'firebase/firestore/lite'
import { FireBaseDB } from '../../firebase/config';
import { addNewEmptyNote, setActiveNote, savingNewNote } from './';


export const startNewNote = () => {
    return async (dispatch, getSate) => {
        //uid
        console.log(getSate().auth);

        dispatch( savingNewNote() )
        
        const { uid }  = getSate().auth;

        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(FireBaseDB, `${ uid }/journal/notas`));
        const setDocResp = await setDoc(newDoc, newNote);

        newNote.id = newDoc.id;

        dispatch(addNewEmptyNote( newNote ));
        dispatch(setActiveNote( newNote ));
    }
}

export const startLoadingNotes = () => {
    return async( dispatch , getState) => {
        
        const { uid } = getState().auth;

        console.log({uid})

    }
}