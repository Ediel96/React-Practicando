import { useSelector, useDispatch } from 'react-redux'
import { onAddNewEvent, onSetActiveEvent, onUpdateEvent, onDeleteEvent } from '../store';

export const useCalendarStore  = () => {

    const dispacth = useDispatch();

    const {
        event : calendarEvent,
        activeEvent
    } = useSelector( state => state.calendar );

    const setActiveEvent = (calendarEvent ) => {
        dispacth( onSetActiveEvent(calendarEvent) );
    }

    const startSavingEvent = async(calendarEvent) => {
        //Todo llega al backend

        //Todo bien
        if(calendarEvent._id){
            // Actualizando
            dispacth( onUpdateEvent({...calendarEvent}) );
        }else  {
            //Creando
            await dispacth( onAddNewEvent({ ...calendarEvent, _id : new Date().getTime() }) );
        }
    }   

    const startDelete = () => {
        dispacth(onDeleteEvent());
    }

    return {
        //* Propiedades
        calendarEvent,
        activeEvent,
        hasEvenSelected: !!activeEvent,

        //* Metodos
        setActiveEvent,
        startSavingEvent,
        startDelete
    }
}