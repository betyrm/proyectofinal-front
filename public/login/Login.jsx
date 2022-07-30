import React from 'react';
import '../login/login.css';
import axios from "axios";
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";



function Login ({setAutenticado}) {  
  const navigate = useNavigate();
  const [inputs, setInputs ] = useState({
    email: "",
    contraseña: "",
  });
  const handleChange = (e) => {
    setInputs({
      ...inputs,
      [e.target.name]: e.target.value
    })
  };
  const handleClick = async () => {
    const data = await axios.post(process.env.REACT_APP_SERVER + "/autenticar", inputs)
    if (data.data !== "Usuario no autenticado") {
      setAutenticado(data.data);
      navigate("/usuarios");
    }
    setInputs({
      email: "",
      contraseña: "",
    })
  };
  return (
    <>
      <div className="container-login">
        <h1 className="login">Login</h1>
        
        {Object.keys(inputs).map((key, index) => (
          <Form.Group className="mb-3" key={index}>
            <Form.Label id="form" className="mb-3">
              {key === "_idUsuario" ? key.toUpperCase() : key[0].toUpperCase() + key.slice(1)}
              </Form.Label>
            <Form.Control 
            type={key === "contraseña" ? "password" : "text"}
            name={key}
            value={inputs[key]}
            onChange={handleChange}
            />
          </Form.Group>
    ))}
    <Button className="full-width m-3" onClick={handleClick} style={{ background:'#A64208', border:'#BF5111' }}>Login</Button>
      </div>
    </>
  );
}


export default Login;


