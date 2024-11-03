import { NoteInputProps } from "./interface";
import {useState} from "react";
import { NoteProps } from "./interface";
import formImage from "../assets/jam.png"
function Form(props: NoteInputProps){
    const [input, updateInput] = useState({title: "", content: ""});
    function changeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        updateInput((prevInput)=>{
            if(event.target.name === "text-input"){
                return {title: event.target.value, content: prevInput.content}
            }
            return {title: prevInput.title, content: event.target.value}
        })
    }
    return (
    <>
        <form onSubmit={(event: React.FormEvent)=>{
                event.preventDefault();
                const newNote: NoteProps = {
                    title: input.title,
                    content: input.content,
                    id: Date.now(),
                    del: () => props.deleteNote(Date.now())
                }
                props.addNote(newNote)
                updateInput({title: "", content: ""});
            }}>
            <img src={formImage} alt="Form Image" className="form-img" draggable="false" />
            <input name="text-input" type="text" placeholder="Title" className="text-input" onChange={changeHandler} value={input.title} required>
            </input>
            <textarea name="text-area" placeholder="New Note..." className="text-area" onChange={changeHandler} value={input.content} required></textarea>
            <button className="add-btn" type="submit">
                <span className="btn-text">Add</span>
            </button>
        </form>
    </>
    )
}

export default Form;