import React, { useState, useEffect }  from 'react'
import "./SongContainer.css"
import CreateSongNote from '../CreateSongNote/CreateSongNote'
import { readSong, updateSong, deleteSong } from "../../utilities/song-service"

function SongContainer() {

    const [songs, setSongs] = useState([])
    const [currentSong, setCurrentSong] = useState([])
    const [trigger, setTrigger] = useState(0); 

    useEffect(() => {
        async function getItems() {
            const items = await  readSong()
            setSongs(items)
        }
        getItems()
       
        
        console.log("XXX: ", songs)
    },[])

    const handleEdit = async (id) => {
        await updateSong(id)
    }

    const handleDelete = async (id) => {
        await deleteSong(id)
    }

    const handleClick = (i) => {
        setCurrentSong(songs[i])
        // eachSongsNotes()
        console.log('You clicked on',songs[i])
        console.log("Trigger in Parent: ", trigger)
    }

  return (
    <div>
        <div className="toDoContainer">
            {
                songs.length === 0 
                ? 
                <div><h3>No Record</h3></div>
                :
                songs.map((song, index)  => (
                    <div className="containTask">
                        <div className="task">
                            <div className="checkbox" onClick={() => handleEdit(song._id)}>
                                <label className='icon' >
                                    <input type="checkbox"></input> 
                                </label>
                            </div> 
                                <p onClick={()=>  {
                                        handleClick(index);
                                        setTrigger((trigger) => trigger + 1)
                                    }} 
                                    className={song.done 
                                    ? 
                                    "line_through" 
                                    : 
                                    ""}> {song.task} </p>
                            <div>
                                <span className='icon' 
                                    onClick={() => handleDelete(song._id)}>🗑️</span>
                            </div>
                        
                        </div>
                    </div>
                ))
            }
            
            
        </div>
        <CreateSongNote currentSong={currentSong} 
                        trigger={trigger} 
                        setTrigger={setTrigger} /> 
    </div>
  )
}

export default SongContainer