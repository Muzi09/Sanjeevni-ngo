import React from 'react'
import Logo from "../Assets/Logo.svg"
import { Button } from '@mui/material';

function Footer() {
  return (
    <footer
      className="border-top w-100"
      style={{
        background: "linear-gradient(to bottom, #ffffff, #f0f0f0)",
      }}
    >
      <div className="container py-4">
        <div className="flex sm:flex-row flex-col justify-center items-center">
          <div className="col-lg-3 col-sm-6 mb-4">

            <div>
              <img
                src={Logo}
                alt="Logo"
                className="logo"
                width={180}
                style={{
                  mixBlendMode: 'multiply'
                }}
              />
            </div>
          </div>


          <div className="col-lg-3 col-sm-6 mb-4">
            <h3 className="h5 font-weight-semibold text-center">Navigation</h3>
            <ul className="list-unstyled text-center">
              <li>
                <a href="/home" className="text-muted text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a href="/about-us" className="text-muted text-decoration-none">
                  About Us
                </a>
              </li>
              <li>
                <a href="/contact-us" className="text-muted text-decoration-none">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/our-policies" className="text-muted text-decoration-none">
                  Our Policies
                </a>
              </li>
              <li>
                <a href="/terms-and-conditions" className="text-muted text-decoration-none">
                  Terms And Conditions
                </a>
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-sm-6 mb-4">
            <h3 className="h5 font-weight-semibold text-center">Support</h3>
            <ul className="list-unstyled text-center">
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Partners
                </a>
              </li>
              <li>
                <a href="#" className="text-muted text-decoration-none">
                  Support
                </a>
              </li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center text-muted py-2">
          <p className='position-relative top-2'>&copy; 2024 Being Sanjeevani. All rights reserved.</p>
          <div className="d-flex mb-3 mb-md-0">
            <a href="/our-policy" className="text-muted text-decoration-none mx-2">
              Our Policies
            </a>
            <a href="/terms-and-conditions" className="text-muted text-decoration-none mx-2">
              Terms and Conditions
            </a>
          </div>
          <div className="d-flex">
            <a href="#" className="text-muted mx-2">
              <FacebookIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted mx-2">
              <TwitterIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted mx-2">
              <InstagramIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted mx-2">
              <LinkedinIcon className="w-5 h-5" />
            </a>
            <a href="#" className="text-muted mx-2">
              <YoutubeIcon className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};



function FacebookIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function InstagramIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
function LinkedinIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
function TwitterIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}
function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
}
function YoutubeIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
      <path d="m10 15 5-3-5-3z" />
    </svg>
  );
}
export default Footer;