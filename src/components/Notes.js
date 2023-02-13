import Note from "./Note";
import CreatNote from "./CreatNote";
import { useEffect, useState } from "react";
import {v4 as uuid} from 'uuid';
function Notes(){
    const [notes, setNotes] = useState([]);
    const [inputText, setInputText] = useState("");
    const textHandler = (e)=>{
        setInputText(e.target.value);
    }
    const saveHandler = ()=> {
        setNotes((prevState)=>[
            ...prevState,
            {
                id:uuid(),
                text:inputText
            }
        ])
        setInputText('')
    }

    const deleteNote = (id)=>{
        const filteredNotes = notes.filter(note=>note.id !== id);
        setNotes(filteredNotes);
    }

    useEffect(()=>{
        const data = JSON.parse(localStorage.getItem("Notes"));
        console.log('data',data);
        if(data.length > 0){
            setNotes(data)
        }
    },[])
    useEffect(()=>{
        console.log(notes)
        //saving data to local storage
        localStorage.setItem("Notes",JSON.stringify(notes))
    },[notes])
    return(
        <div className="notes">
            {notes.map((note)=>{
                return(
                    <Note 
                        key={note.id}
                        text={note.text}
                        id = {note.id}
                        deleteNote={deleteNote}
                    />
                )
            })}
            <CreatNote
            textHandler={textHandler}
            inputText={inputText}
            saveHandler={saveHandler}
            />
        </div>
    )
}

export default Notes;