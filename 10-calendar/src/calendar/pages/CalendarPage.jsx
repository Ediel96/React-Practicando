
import { useState } from 'react'
import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'

import { Navbar, CalendarEvent, CalendarModal, FabAddNew, FabDelete } from "../"
import { getMessaggesEs, localizer } from "../../helpers"
import { useUiStore,useCalendarStore } from '../../hooks'



export const CalendarPage = () => {

  const { openDateModal } = useUiStore();
  const { calendarEvent, setActiveEvent } = useCalendarStore();

  const [lasView, setLastview] = useState(localStorage.getItem('lastView') || 'week')

  const enentStyleGetter = (event, start, end , isSelected) => {
    
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity:0.8,
      color:'white',
      height: '100%',
      // width: '50%'
    }

    return{
      style
    }

  }

  const onDoubleClick = ( event ) => {
    console.log({onDoubleClick : event});
    openDateModal()
  } 

  const onSelect = (event) => {
    console.log({onSelect: event});
    setActiveEvent(event)
  }

  const onViewChanged = (event) => {
    localStorage.setItem('lastView', event);
    setLastview(event)
  }

  return (
    <>
      <Navbar/>

      <Calendar
      culture='es'// que tipo de lenguaje
        localizer={localizer} // Configuracion de tipo de calendario como el formato
        defaultView={lasView}
        events={calendarEvent}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc( 100vh - 80px)' }}
        messages={getMessaggesEs()}
        eventPropGetter={enentStyleGetter}
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={onDoubleClick}
        onSelectEvent={onSelect}
        onView={onViewChanged}
      />

      <CalendarModal/>

      <FabAddNew />
      <FabDelete/>

    </>
  )
}
