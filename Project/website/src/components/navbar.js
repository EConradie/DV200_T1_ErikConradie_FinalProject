import React from "react";
import { Container, NavbarBrand } from "react-bootstrap";
import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";

function BasicNav() {

    return (
        <Navbar sticky='top' variant='dark'>
            <Container style={{marginTop: '1%'}}>
                <Navbar.Brand style={{ marginRight: '10%' }} href="/">StatsFormula</Navbar.Brand>
                <Nav className='me-auto' >
                    <Nav.Link style={{ marginRight: '20%',  }} href="/">Dashboard</Nav.Link>
                    <Nav.Link style={{ marginRight: '20%' }}href="/compare">Compare</Nav.Link>
                    <Nav.Link style={{ marginRight: '20%' }} href="/time">Timeline</Nav.Link>     
                </Nav>
            </Container>
        </Navbar>

    )
}

export default BasicNav;