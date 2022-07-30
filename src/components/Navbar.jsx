import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";

const NavBar = () => {
  return (

    <Navbar className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
      <Container>
        
                <div className="collapse navbar-collapse" id="navbarResponsive">
                    <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                        <li className="nav-item"><a className="nav-link" style={{color:"black"}}  href="/">Inicio</a></li>
                        <li className="nav-item"><a className="nav-link" style={{color:"black"}}  href="/portfolio">Nuestros Productos</a></li>
                        <li className="nav-item"><a className="nav-link" style={{color:"black"}}  href="/formulario">Ingreso a Clientes</a></li>
                        
                        <li className="nav-item"><a className="nav-link" style={{color:"black"}} href="/contact">Contacto</a></li>
                    </ul>
                </div>
       
        
      </Container>
    </Navbar>
  );
};

export default NavBar;
