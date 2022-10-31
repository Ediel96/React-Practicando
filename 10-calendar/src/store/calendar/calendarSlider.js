import { createSlice } from '@reduxjs/toolkit';
import { addHours } from 'date-fns';

const tempEvent = {
    _id: new Date().getTime(),
    title : 'Cumpleanos del jefe',
    note: 'Hay que comprar una torta',
    start: new Date(),
    end: addHours( new Date(), 2),
    bgColor: '#fafafa',
    user  : {
        _id:'123',
        name: 'Fernando'
    }
}

const initialState = {
    event: [tempEvent],
    activeEvent : null
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState,

reducers: {
        onSetActiveEvent: (state, {payload}) => {
            state.activeEvent = payload;
        },
        onAddNewEvent: ( state, { payload } ) => {
            console.log({payload})
            state.event.push( payload );
            state.activeEvent = null;
        },
        onUpdateEvent:(state , {payload}) => {
            state.event = state.event.map( event => {
                if(event.id === payload.id){
                    return payload;
                }
                return event;
            })
        },
        onDeleteEvent: ( state ) => {

            if(state.activeEvent){
                state.event = state.event.filter(event => event._id !== state.activeEvent._id);
                state.activeEvent = null;
            }
        }
    }
})
export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions;