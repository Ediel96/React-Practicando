import { addHours ,differenceInSeconds} from 'date-fns';
import {  useMemo, useState, useEffect } from 'react';
import Modal from 'react-modal/lib/components/Modal';

import Swal from 'sweetalert2';
// import 'sweetalert2/dist/sweetalert2.all.css'

import { useCalendarStore, useUiStore } from '../../hooks'

import DatePicker, { registerLocale } from "react-datepicker";
import es from 'date-fns/locale/es'

import "react-datepicker/dist/react-datepicker.css";

registerLocale('es', es)

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        // width: '50%'
    },
};


Modal.setAppElement('#root');


export const CalendarModal = () => {

    const { isDateModalOpen, closeDateModal } = useUiStore();

    const  { activeEvent, startSavingEvent }  = useCalendarStore();

    const [formSubmitted, setformSubmitted] = useState(false)

    const [formValues, setformValues] = useState({
        title:'Hamilton',
        notes:'Acevedo',
        start: new Date(),
        end: addHours(new Date, 2)
    });

    const titleClasss = useMemo(() => {
        if(!formSubmitted) return '';

        return (formValues.title.length > 0)
        ? 'is-valid'
        : 'is-invalid'
        
    }, [formValues.title, formSubmitted]);

    useEffect(() => {

        if(activeEvent  !== null) {
            setformValues({ ...activeEvent });
        };
    
    }, [activeEvent])
    

    const onInputChange = ({ target }) => {
        setformValues({
            ...formValues,
            [target.name]:target.value
        })
    }

    const onDateChanged = (event, changing) => {
        setformValues({
            ...formValues,
            [changing]: event
        })
    }

    const onCloseModal = () => {
        closeDateModal()
        
    }

    const onSubmit = async( event ) => {
        event.preventDefault();
        setformSubmitted(true)

        const difference = differenceInSeconds(formValues.end, formValues.start);
        console.log({ difference });

        if(isNaN(difference) || difference <= 0){
            Swal.fire('Fecha incorrectas', 'Revisar la fechas ingresadas', 'error');
            return
        }

        if(formValues.title.length <= 0) return;
        
        console.log('paso por qui?')
        await  startSavingEvent(formValues);
        closeDateModal();

    }

    return (
        <Modal
            isOpen={ isDateModalOpen }
            onRequestClose={onCloseModal}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }
        >

        <h1> Nuevo evento </h1>
        <hr />
            <form className="container" onSubmit={ onSubmit }>

                <div className="form-group mb-2">
                    <label>Fecha y hora inicio</label>
                    <DatePicker 
                        selected={ formValues.start }
                        onChange={ (event) => onDateChanged(event, 'start')}
                        dateFormat="Pp"
                        className={`form-control`}
                        showTimeSelect
                        timeCaption='Hora'
                    />
                </div>

                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker 
                        minDate={formValues.start}
                        selected={ formValues.end }
                        onChange={ (event) => onDateChanged(event, 'start')}
                        dateFormat="Pp"
                        className="form-control"
                        showTimeSelect
                        locale='es'
                        timeCaption='Hora'

                    />
                </div>

                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={`form-control ${titleClasss}`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ formValues.title }
                        onChange={ onInputChange }
                        locale='es'
                    />
                    <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                </div>

                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ formValues.notes }
                        onChange={ onInputChange }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form>
        </Modal>
    )
}
