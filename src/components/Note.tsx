import {NoteProps} from './interface.ts'
import DeleteBtn from './DeleteBtn.tsx'
function Note(props: NoteProps) {
  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <DeleteBtn del={props.del}/>
    </div>
  );
}

  
  export default Note;