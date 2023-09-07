import React, { useState, useEffect } from 'react'
import "./SongNoteContainer.css"
import { readSongNotes } from "../../utilities/songnotes-service"
import { updateSongNotes } from "../../utilities/songnotes-service"
import { deleteSongNotes } from "../../utilities/songnotes-service"

function SongNoteContainer( {currentSong, trigger, trigger2} ) {

    const [songNotes, setSongNotes] = useState([])
    const [currentSongNoteList, setCurrentSongNoteList] = useState([])

    console.log("In 2nd Child, currentSong: ", currentSong.task);
    console.log("In 2nd Child, trigger: ", trigger);
    console.log("songNotes array; ", songNotes)

    useEffect(() => {
        async function getNotesItems() {
            const notesItems = await readSongNotes()
        }
        getNotesItems()
   },[])

   const handleEdit = async (id) => {
        // need to add id 
        await updateSongNotes()
    //    axios.put('http://localhost:3001/songnotes/updatesongnote/update'+id)
    
   }

   const handleDelete = async (id) => {
        // need to add id 
        await deleteSongNotes()
    //    axios.delete('http://localhost:3001/songnotes/deleteSongNote/'+id)
   
   }

   const log = () => {
        
        setCurrentSongNoteList(songNotes.filter((s) => s.songName === currentSong.task)) 
    
        console.log("XX", songNotes.songName)
        console.log("XXcurrentSong", currentSong.task)
        console.log("2phone call from parent", currentSongNoteList)
        
    }

    useEffect(() => {
        if (trigger) {
          log();

        }
    }, [trigger]);

    // useEffect(() => {
    //     if (trigger2) {
    //       log();

    //     }
    // }, [trigger2]);



    // const isEven = (value) => value % 2 === 0;
    // const even = input.filter(isEven);


  return (
    <div className="songNoteContainer">
    {/* {songNotes.filter(name => name.includes(currentSong))} */}
    {
        currentSongNoteList.length === 0 
        ? 
        <div><h3>No Record</h3></div>
        :
        currentSongNoteList.map((songNote, index)  => (
            <div className="containTask">
                <div className="task">
                    <div className="checkbox" onClick={() => handleEdit(songNote._id)}>
                        <label className='icon' >
                            <input type="checkbox"></input> 
                        </label>
                    </div> 
                        <p className={songNote.done 
                            ? 
                            "line_through" 
                            : 
                            ""}> {songNote.songNote} </p>
                    <div>
                        <span className='icon' 
                            onClick={() => handleDelete(songNote._id)}>🗑️</span>
                    </div>
                
                </div>
            </div>
        ))
    }
    
    
</div>
  )
}

export default SongNoteContainer