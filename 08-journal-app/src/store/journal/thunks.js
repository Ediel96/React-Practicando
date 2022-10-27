

import { collection, deleteDoc, doc, setDoc } from 'firebase/firestore/lite'
import { FireBaseDB } from '../../firebase/config';
import { fileUpload } from '../../helpers';
import { loadNotes } from '../../helpers/loadNotes';
import { addNewEmptyNote, setActiveNote, savingNewNote , setNotes, updateNote, setSaving, setPhotosToActiveNote, deleteNoteById} from './';


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
        if(!uid) throw new Error('Error UID del usuario no existe');

        const  notes = await loadNotes(uid);
        dispatch(setNotes(notes))
    }
}

export const startSaveNote = () => {
    return async(dispatch, getState) => {
        const {uid} = getState().auth;
        const { active : note } = getState().journal;

        const noteToFireStore = { ...note };
        delete noteToFireStore.id;

        const docRef = doc(FireBaseDB, `${uid}/journal/notas/${note.id}`);
        await setDoc (docRef, noteToFireStore, {merge: true});

        dispatch(updateNote(note));

    }
}

export const startUploadingFiles = ( files = []) => {

    return async( dispatch ) => {
        dispatch(setSaving());

        const fileUploadPromises = [];
        for (const file of files){
            fileUploadPromises.push(fileUpload(file));
        }

        const photosUrls = await Promise.all( fileUploadPromises );

        dispatch(setPhotosToActiveNote(photosUrls))

    } 
}

export const startDeleteNote = () => {

    return async(dispacth, getState) => {

    const { uid } = getState().auth;
    const { active:note } = getState().journal; 

    const docRef = doc( FireBaseDB, `${ uid }/journal/notas/${note.id}` );
    const resp = await deleteDoc(docRef);

    dispacth( deleteNoteById(note.id) )

    }

} 