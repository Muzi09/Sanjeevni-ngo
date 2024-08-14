import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import Logo from '../Assets/Logo.svg'; // Adjust path as necessary

function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleNavLinkClick = () => {
    setExpanded(false);
    setDropdownOpen(false); // Close dropdown when navigating away
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const activeLinkStyle = {
    color: '#1876D2', // Set the active link color
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
            <div className='text-sm font-semibold  logo-font'>Being Sanjeevani Foundation</div>
            <div className='text-xs logo-font'>"Where Care Meets Compassion"</div>
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
            <div className="relative flex justify-center">
              <button
                className="nav-link text-gray-700"
                onClick={toggleDropdown}
              >
                Our Policies&#9660;
              </button>
              <div
                className={`z-20- absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg rounded-lg transition-all duration-300 ease-in-out origin-top-right ${dropdownOpen ? 'transform scale-100 opacity-100' : 'transform scale-95 opacity-0 pointer-events-none'
                  }`}
              >
                <Nav.Link
                  as={NavLink}
                  to="/our-policies/privacy-policy"
                  onClick={handleNavLinkClick}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                >
                  Privacy Policy
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/our-policies/shipping-and-delivery"
                  onClick={handleNavLinkClick}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                >
                  Shipping & Delivery
                </Nav.Link>
                <Nav.Link
                  as={NavLink}
                  to="/our-policies/cancellation-and-refund"
                  onClick={handleNavLinkClick}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  style={({ isActive }) => isActive ? activeLinkStyle : undefined}
                >
                  Cancellation & Refund
                </Nav.Link>
              </div>
            </div>
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
