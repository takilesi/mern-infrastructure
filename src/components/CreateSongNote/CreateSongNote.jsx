import React, {useState} from 'react'
import "./CreateSongNote.css"
import SongNoteContainer from '../SongNoteContainer/SongNoteContainer'
import { createSongNotes } from "../../utilities/songnotes-service"

function CreateSongNote( {currentSong, trigger, setTrigger} ) {
    // const [currentSong, setCurrentSong] = useState(currentSong); 
    const [songNote, setSongNote] = useState()
    const [trigger2, setTrigger2] = useState(0); 
    const songName = currentSong.task
    const songNameId = currentSong._id

    // good place for console.logs
   
    const handleAdd = async (evt) => {
        evt.preventDefault()
            await createSongNotes(
                {
                    songNote: songNote, 
                    songName: songName,
                    songNameId: songNameId
                }
            ); 
    }
    const handleChange = (evt) => {
        setSongNote({...songNote,[evt.target.name]:evt.target.value})
    }

  return ( 
    <div>
        <p>Enter note for... {currentSong.task}</p> 
        <div className="create_form">
            <input  name="songName" type="text" placeholder="Song Note" onChange={(e) => handleChange(e)} />
            <button type="button" onClick={()=> {
                handleAdd()
                setTrigger2((trigger2) => trigger2 + 1)
            }  
            }>Add</button>
        </div>
        <SongNoteContainer 
            currentSong={currentSong} 
            trigger={trigger} 
            trigger2={trigger2}/>
    </div>
  )
}

export default CreateSongNote