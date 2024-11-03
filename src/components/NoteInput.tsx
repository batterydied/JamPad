import Form from './Form.tsx'
import { NoteInputProps } from './interface.ts'
function NoteInput(props: NoteInputProps){
    return (
        <>  
        <div className="center">
            <div className="note-input">
                <Form addNote={props.addNote} deleteNote={props.deleteNote}/>
            </div>
        </div>
        </>
    )
}
export default NoteInput