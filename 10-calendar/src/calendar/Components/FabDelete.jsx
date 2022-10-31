
import { useUiStore, useCalendarStore } from '../../hooks'

export const FabDelete = () => {

    const { startDelete, hasEvenSelected } = useCalendarStore();

    const handleDelete = () => {
        startDelete();
    } 

    return (
        <button
            // disabled={hasEvenSelected}
            className='btn btn-danger fab-danger'
            onClick={ handleDelete }
            style={{
                display: hasEvenSelected ? '' : 'none' 
            }}
            >
            <i className='fas fa-trash-alt'></i>
        </button>
    )
}
