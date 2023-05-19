import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from '../../pages/HomePage'
import AboutPage from '../../pages/AboutPage'
import ContactPage from '../../pages/ContactPage'
import BlogPage from '../../pages/BlogPage'
import Center from '../Center/Center'
import Info from '../Info/Info'


export default function Header() {
  return (
    <div>
      {/* <Navbar  collapseOnSelect expand="md" bg="light" variant="light">
        <Container>
          <Navbar.Brand href="/">
            <img 
              src={logo} 
              height="48" 
              width="153" 
              className="d-inline-block align-top" 
              alt="Logo"
              />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href="/" className={style.pint}>Home</Nav.Link>
              <Nav.Link href="/about"className={style.pint}>About us</Nav.Link>
              <Nav.Link href="/contacts" className={style.pint}>Contacts</Nav.Link>
              <Nav.Link href="/blog" className={style.pint}>Blog</Nav.Link>
            </Nav>
            <Form className='d-flex'  >
              <FormControl
                type="text"
                placeholder="Search"
                className="mr-sm-2"
                style={{ marginLeft: '370px' }}
              />
              <Button variant="outline-info" className={style.custom_button}>Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Router>
        <Routes>
          <Route index element={<HomePage/>}/>
          <Route path='about' element={<Info/>}/>
          <Route path='/contacts' element={<Center/>}/>
          <Route path='/blog' element={<BlogPage/>}/>
        </Routes>
      </Router>
    </div>
  )
}
