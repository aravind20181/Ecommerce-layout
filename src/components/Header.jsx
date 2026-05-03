import React from 'react'
import { Navbar,Container,Nav,NavDropdown} from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

function Header(){
    return(
       <>
       <Navbar bg="dark" variant="dark" collapseOnSelect>
        <Container>
            <LinkContainer to="/">
            <Navbar.Brand>Ecommerce Layout</Navbar.Brand>
            </LinkContainer>
            <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer>
            <Nav.Link href="#home">Home</Nav.Link>
            </LinkContainer>
            
             <LinkContainer>
             <Nav.Link href="#link">Link</Nav.Link>
             </LinkContainer>
            

            
          </Nav>
        </Navbar.Collapse>


        </Container>
       </Navbar>
       </>
    )
}

export default Header