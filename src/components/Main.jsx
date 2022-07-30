import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Col, ListGroup, Row } from 'react-bootstrap'
import Formulario from "./Formulario";


const Main = () => {
  const [personas, setPersonas] = useState([])
  const getPersonas = async () => {
        const { data } = await axios.get(process.env.REACT_APP_SERVER) //Dirección de la API o el back
        setPersonas(data.personas)
      }
  useEffect(() => {
    
    getPersonas()
  }, [])
  const handleDelete = async (id) => {
    const {data} = await axios.delete(
      process.env.REACT_APP_SERVER + "eliminar/" + id
    );
      setPersonas(personas.filter(persona => persona._id !== id)); 
     
  /* const { data: datos } = await axios.get(process.env.REACT_APP_SERVER); //Dirección de la API o el back
    setPersonas(datos.personas); 
 */
    
  };

  return (
    <div style={{marginTop:58}}>
      <Row>
        <Col xs={6}>
          <Formulario getPersonas={getPersonas} />
        </Col>
        <Col xs={6}>
          {/* <div> */}
            <ListGroup>
              {personas.map(persona => (
                <ListGroup.Item key={persona._id}>
                      {`${persona.nombre} ${persona.apellido}, DNI: ${persona.dni}`}{" "}
                  <Button size="sm" onClick={() => handleDelete(persona._id)}>
                  Eliminar
                  </Button>
                </ListGroup.Item>))}
            </ListGroup>
            
         {/*  </div> */}
        </Col>
        
      </Row>
    </div>
    
  )
}

export default Main;