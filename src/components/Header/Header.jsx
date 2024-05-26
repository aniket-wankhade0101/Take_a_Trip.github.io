import React, { useContext } from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import "../Header/Header.css"
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { Context } from "../context/context";



const Header = () => {
    const {status,setstatus} = useContext(Context)

    return (
        <>
         
            <Navbar expand="lg" className="nav-bar  fixed-top">
                <Container>
                    <Navbar.Brand className="brand" href=""> Take A Trip</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    {
                        status?null:
                        
                        (<Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="m-auto">
                            <NavLink className="nav-link " to="/home">Home</NavLink>
                            <NavLink className="nav-link" to="/destination">Destination</NavLink>
                            <NavLink className="nav-link" to="/tours">Tours</NavLink>
                            <NavLink className="nav-link" to="/gallery">Gallery</NavLink>
                            <NavLink className="nav-link" to="/about">About</NavLink>
                            
                          
                          
                        </Nav>

                        <Nav className="ms-auto">
                            {/* <NavLink className="nav-link" to="/login">Login</NavLink>
                            <NavLink className="nav-link" to="/register">Register</NavLink> */}
                           <NavLink className="nav-link" to="/booking">My Booking</NavLink>
                           <NavLink className="nav-link" to="/">Log Out</NavLink>
                        </Nav>
                    </Navbar.Collapse>)
}
                    
                </Container>
            </Navbar>
        </>
    )
}

export default Header;