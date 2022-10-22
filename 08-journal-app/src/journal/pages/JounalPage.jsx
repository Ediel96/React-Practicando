import { useDispatch, useSelector } from "react-redux"
import { AddOutlined } from "@mui/icons-material"
import { IconButton } from "@mui/material"
import { JournalLayout } from "../layout/JournalLayout"
import { NoteView, NothingSelectView } from "../views"
import { startNewNote } from "../../store/journal"

export const JounalPage = () => {

  const dispatch = useDispatch();
  const { isSaving, active } = useSelector( state => state.journal)

  const onClickNewDate = () => {
    dispatch( startNewNote() );
  }

  return (
    <JournalLayout>

      {
        (!!active)
        ?<NoteView/>
        :<NothingSelectView/>
      }

      <IconButton
      onClick={ onClickNewDate }
        size='large'
        disabled={ isSaving }
        sx={{
          color: 'white',
          backgroundColor: 'error.main',
          ':hover': { backgroundColor: 'error.main', opacity: 0.9 },
          position: 'fixed',
          right: 50,
          bottom: 50
        }}
      >
        <AddOutlined sx={{ fontSize: 30 }} />
      </IconButton>


      
    </JournalLayout>
  )
}
