import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../Assets/Logo.svg'; // Adjust path as necessary

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
  };

  const activeLinkStyle = {
    color: '#38f1ff', // Set the active link color
    fontWeight: 'bold',
  };

  return (
    <Navbar className='container' expand="xl" expanded={expanded}>
      <Container>
        <Navbar.Brand className='d-flex items-center' as={NavLink} to="/">
          <img src={Logo} width={70} alt="Logo" className="logo" />
          <div
            style={{
              background: "linear-gradient(90deg, rgba(255,99,0,1) 0%, rgba(75,242,255,1) 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent"
            }}
          >
            <div className='text-sm font-semibold  font-mono' >Being Sanjeevani Foundation</div>
            <div className='text-xs font-mono' >"Where Care Meets Compassion"</div>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto text-center">
            <Nav.Link 
              as={NavLink} 
              to="/" 
              exact 
              onClick={handleNavLinkClick}
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              Home
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/about-us" 
              onClick={handleNavLinkClick}
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              About Us
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/contact-us" 
              onClick={handleNavLinkClick}
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              Contact Us
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/our-policies" 
              onClick={handleNavLinkClick}
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              Our Policies
            </Nav.Link>
            <Nav.Link 
              as={NavLink} 
              to="/terms-and-conditions" 
              onClick={handleNavLinkClick}
              style={({ isActive }) => isActive ? activeLinkStyle : undefined}
            >
              Terms And Conditions
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MyNavbar;
