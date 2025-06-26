import React, { useState } from "react";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import { v4 as uuidv4 } from 'uuid';


export function Contact() {
   const [formData, setFormData] = useState({
    id: "",
    userName: "",
    email: "",
    comments:""
  })

  function handleChange (event) {
    const {name, value} = event.target
    console.log (name,value)
    setFormData ({...formData, [name]:value})
  }

  function handleADDBook () {
    setFormData ({...formData, id:uuidv4()})
    console.log (formData)
  }
  
  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Text id="basic-addon1">User Name</InputGroup.Text>
        <Form.Control
          placeholder="Username"
          aria-label="Username"
          aria-describedby="basic-addon1"
          name="userName"
          onChange={(event) => handleChange(event)}
        />
      </InputGroup>

      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Email"
          aria-label="Email"
          aria-describedby="basic-addon2"
          name="email"
          onChange={(event) => handleChange(event)}
        />
        <InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
      </InputGroup>

      <InputGroup>
        <InputGroup.Text>Comments</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea"
        name="comments"
        onChange={(event) => handleChange(event)} />
      </InputGroup>
     
      <Button variant="primary" onClick={handleADDBook}>Submit</Button>
    </>
  );
}



