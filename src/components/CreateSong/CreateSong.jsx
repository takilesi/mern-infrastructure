import React, { useState } from 'react'
import "./CreateSong.css"
import { createSong } from "../../utilities/song-service"
// import { create } from '../../../controllers/api'

function CreateSong() {

    const [song, setSong] = useState({})
    
    const handleAdd = async (evt) => {
      evt.preventDefault()
      console.log("CreateSong.jsxTEST", song)
          await createSong(song);   
    }
    console.log("SONG:", song)
    
    const handleChange = (evt) => {
      setSong({...song,[evt.target.name]:evt.target.value})
    }

  return (
    <div className="create_form">
        <input  name="task" type="text" placeholder="Enter Song" onChange={(e) => handleChange(e)} />
        <button type="button" onClick={handleAdd}>Add</button>
    </div>
  )
}; 

export default CreateSong; 