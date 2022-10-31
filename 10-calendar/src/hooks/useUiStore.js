import { useSelector, useDispatch } from 'react-redux'
import { onOpenDateModal, onCloseDateModal } from '../store';

export const useUiStore = () => {

    const dispacth = useDispatch();

    const {
        isDateModalOpen
    } = useSelector( state => state.ui );

    const openDateModal = () => {
        dispacth( onOpenDateModal() )
    }

    const closeDateModal = () => {
        dispacth( onCloseDateModal() )
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
        ?  openDateModal() 
        :  closeDateModal();
    }

    return{
        //* Propiedades
        isDateModalOpen,

        //* Metodos
        openDateModal,
        closeDateModal,
        toggleDateModal
    }
}