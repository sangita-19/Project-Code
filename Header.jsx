import React from 'react'
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
const Header = () => {

  return <>
    <Navbar className="bg-dark p-3" expand="lg" fixed="top">
      <Navbar.Brand className='text-primary'><img src="./src/assets/preview.png" height="70px" width="70px" className='border border-warning rounded-pill'/><h4 className='d-inline-block p-3'>Rossy Decor</h4></Navbar.Brand>
      <Nav>
        <Link className='nav-link text-light' to="/">Home </Link>
        <Link className='nav-link text-light' to="/about">About Us</Link>
        <Link className='nav-link text-light' to="/service">Our Services</Link>
        <Link className='nav-link text-light' to="/venue">Venues</Link>
        <Link className='nav-link text-light' to="/contact">Contact Us</Link>
      </Nav>
      <Form className="d-flex ms-auto">
        <Form.Control
          type="search"
          placeholder="Search here"
          className="me-2 ms-auto"
          aria-label="Search" />
        <Button as="a" variant="warning" className='ms-auto'>
          Search
        </Button>
      </Form>
    </Navbar>

  </>
}

export default Header;