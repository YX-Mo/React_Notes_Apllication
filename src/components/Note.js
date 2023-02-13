import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import './Note.css';

function Note({text,id,deleteNote}){
    return( 
        <div className="note">
            <div className="note_body">{text}</div>
            <div className="note__footer" style={{justifyContent:"flex-end"}}>
                <DeleteForeverOutlinedIcon className='note__delete' onClick={()=>deleteNote(id)}></DeleteForeverOutlinedIcon>
            </div>
        </div>
    )
}

export default Note;