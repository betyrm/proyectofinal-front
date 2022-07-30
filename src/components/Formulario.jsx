import axios from "axios";
import React from "react";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import styled from 'styled-components'

const MiDiv = styled.div`

  & #form {
    background-color: red;
  }

`

const Formulario = (props) => {
  const [inputs, setInputs] = useState({
    nombre: "",
    apellido: "",
    dni: "",
  });

  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  };

  const handleClick = async () => {
    await axios.post(process.env.REACT_APP_SERVER + "crear", inputs)
    
    setInputs({
      nombre: "",
      apellido: "",
      dni: "",
    })
    props.getPersonas()
  };

  return (
    <MiDiv className="d-flex flex-column align-items-center">
      {Object.keys(inputs).map((key, index) => (
        <Form.Group className="pt-3" key={index} style={{ maxWidth: "200px" }}>
          <Form.Label id="form">{key === "dni" ? key.toUpperCase() : key[0].toUpperCase() + key.slice(1)}</Form.Label>
          <Form.Control
            name={key}
            value={inputs[key]}
            onChange={handleChange}
          />
        </Form.Group>
      ))}
       <Button className="mt-3" onClick={handleClick}>Enviar</Button>
      
    </MiDiv>
  );
};

export default Formulario;
