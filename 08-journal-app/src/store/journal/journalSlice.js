import { createSlice } from '@reduxjs/toolkit'


export const journalSlice = createSlice({
name: 'journal',
initialState:{
    isSaving: false,
    messageSeved:'',
    notes:[],
    active:null
    // active:{
    //     id:'ABC123',
    //     title:'',
    //     body:'',
    //     date:1234567,
    //     imagesUrls:[],
    // }
},

reducers: {
        savingNewNote: (state) => {
            state.isSaving = true;
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload);
            state.isSaving = false;
        },
        setActiveNote:(state, action) => {
            state.active = action.payload;
            state.messageSeved = '';
        },
        setNotes:(state, action) => {
            state.notes = action.payload;
        },
        setSaving:(state) => {
            state.isSaving =  true;
            state.messageSeved = '';
        },
        updateNote: (state, action) => {
            state.isSaving = false;
            state.notes = state.notes.map( note => { 

                if( note.id == action.payload.id){
                    return action.payload;
                }

                return note;
            
            })
            state.messageSeved = `${action.payload.title}, actualizada correctamente`;
        },
        deleteNodeById:(state, action) => {

        }
    },
})
export const { 
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    updateNote,
    deleteNodeById,
    savingNewNote
} = journalSlice.actions;