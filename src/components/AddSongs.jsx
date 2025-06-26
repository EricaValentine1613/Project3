
import React,{ useState }  from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import { v4 as uuidv4 } from 'uuid';

export default function AddSongs({songs,setSongs}) {
  const [formData, setFormData] = useState({
    title: "",
    artist: ""
  })

  function handleChange (event) {
    const {name, value} = event.target
    console.log (name,value)
    setFormData ({...formData, [name]:value})
  }

  function handleADDSongs () {
    console.log (formData)
    const newSong = {...formData, id:uuidv4()}
    console.log (newSong)
    setSongs ([...songs, newSong])
  }


  return (
    <>
       <InputGroup className="mb-3">
        <Form.Control
          placeholder="Song Title"
          aria-label="Song Title"
          name="title"
          onChange={(event)=>handleChange(event)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Artist"
          aria-label="Artist"
          name="artist"
          onChange={(event)=>handleChange(event)}
        />
      </InputGroup>

      <Button variant="secondary" onClick={handleADDSongs}>Add Song</Button>
    
    </>
  )
}
