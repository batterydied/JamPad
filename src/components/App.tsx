
import Header from './Header.tsx'
import Note from './Note.tsx'
import {useState} from 'react'
import NoteInput from './NoteInput.tsx'
import {NoteProps} from './interface.ts'





function App() {
  const [notes , setNotes] = useState<NoteProps[]>([]);

  function addNote(note: NoteProps){
    setNotes((prevNotes)=>{
      return [...prevNotes, {title: note.title, content: note.content, id: note.id, del: note.del}];
    })
  }

  function deleteNote(id: number){
    const filteredNotes = notes.filter((note)=>note.id !== id);
    setNotes(filteredNotes);
  }

  return (
    <>
    <Header />
    <NoteInput addNote={addNote} deleteNote={deleteNote}/>
    {notes.map((note)=>{
      return <Note title={note.title} content={note.content} key={note.id} id={note.id} del={()=>deleteNote(note.id)}/>
    })}
    </>
  )
}

export default App
