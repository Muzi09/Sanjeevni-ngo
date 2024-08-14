import React from 'react';
import { TextField, Button } from '@mui/material';
import Map from './Map';

function Contact() {


    const handleClick = () => {
        const email = "beingsanjeevanifoundation@gmail.com"; // Replace with your email
        const subject = "Your subject here"; // Optional: add a subject
        const body = "Your message here"; // Optional: add body text
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        window.open(gmailUrl, '_blank'); // Opens Gmail in a new tab
    };



    return (
        <div className='container'>
            <div className='text-[#fff] px-2 py-1 mb-4 rounded-md font-semibold text-lg' style={{ background: 'linear-gradient(90deg, rgba(255,99,0,1) 0%, rgba(255,194,103,1) 100%)' }}>
                Contact Us
            </div>

            <Map/>
            <span className='font-semibold'>Have a query ? Fill the below we will get back to you. </span>
            <div className='py-6'>
                <form className='space-y-4 mb-5'>
                    <TextField
                        label="Name"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{ style: { color: '#333' } }}
                        InputProps={{ style: { color: '#333' } }}
                    />
                    <TextField
                        label="Email"
                        type="email"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{ style: { color: '#333' } }}
                        InputProps={{ style: { color: '#333' } }}
                    />
                    <TextField
                        label="Subject"
                        variant="outlined"
                        fullWidth
                        InputLabelProps={{ style: { color: '#333' } }}
                        InputProps={{ style: { color: '#333' } }}
                    />
                    <TextField
                        label="Message"
                        variant="outlined"
                        fullWidth
                        multiline
                        rows={4}
                        InputLabelProps={{ style: { color: '#333' } }}
                        InputProps={{ style: { color: '#333' } }}
                    />
                    <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        style={{ backgroundColor: '#00ccff', color: '#fff' }}
                    >
                        Send Message
                    </Button>
                </form>


                <div className='mb-5'>
                    <span className='font-semibold '>Follow us on our social media handles </span>
                    <div className='flex mt-2 '>
                        <a href=' https://www.facebook.com/sanjeevnisewajankalyansamiti' target='_blank'>
                            <FacebookIcon className="cursor-pointer w-7 h-7" />

                        </a>
                        <a href='https://instagram.com/being_sanjeevani_foundation?igshid=YmMyMTA2M2Y=' target='_blank'>

                            <InstagramIcon className="cursor-pointer w-7 h-7 ms-4" />
                        </a>


                        <a onClick={handleClick} target='_blank'>

                            <GmailIcon className="cursor-pointer w-7 h-7 ms-4" />
                        </a>

                    </div>

                </div>


                <div>
                <span className='font-semibold '>Contact our officials</span>
                <div className='flex flex-col mt-2 '>
                    <div className='flex justify-between' style={{maxWidth: '350px'}}>
                        <span>Vijay Singh Rathore </span>
                        <span className='text-slate-600'>9039381859 </span>
                    </div>
                    <div className='flex justify-between' style={{maxWidth: '350px'}}>
                        <span>Ravi Anjana  </span>
                        <span className='text-slate-600'>7770867505 </span>
                    </div>
                </div>

                </div>


            </div>
        </div>
    );
}

export default Contact;




function FacebookIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="#3b5998" // Facebook Blue
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
            stroke="#E1306C"
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

function GmailIcon(props) {
    return (
        <svg {...props} xmlns="http://www.w3.org/2000/svg" width="1.33em" height="1em" viewBox="0 0 256 193"><path fill="#4285f4" d="M58.182 192.05V93.14L27.507 65.077L0 49.504v125.091c0 9.658 7.825 17.455 17.455 17.455z" /><path fill="#34a853" d="M197.818 192.05h40.727c9.659 0 17.455-7.826 17.455-17.455V49.505l-31.156 17.837l-27.026 25.798z" /><path fill="#ea4335" d="m58.182 93.14l-4.174-38.647l4.174-36.989L128 69.868l69.818-52.364l4.669 34.992l-4.669 40.644L128 145.504z" /><path fill="#fbbc04" d="M197.818 17.504V93.14L256 49.504V26.231c0-21.585-24.64-33.89-41.89-20.945z" /><path fill="#c5221f" d="m0 49.504l26.759 20.07L58.182 93.14V17.504L41.89 5.286C24.61-7.66 0 4.646 0 26.23z" /></svg>
    );
}