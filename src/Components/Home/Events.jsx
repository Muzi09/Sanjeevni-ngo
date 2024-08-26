import React from 'react';
import Tournament from "../../Assets/Tournament1.jpg";
import Tournament3 from "../../Assets/Tournament2.jpg";
import Tournament2 from "../../Assets/Tournament3.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure this is imported for styling
import { TextField, Button } from '@mui/material';

function Events() {
    return (
        <div className='container mb-5'>



            <div className='text-[#fff] px-2 py-1 rounded-md font-semibold text-lg' style={{ background: 'linear-gradient(90deg, rgba(255,99,0,1) 0%, rgba(255,194,103,1) 100%)' }}>
                Upcoming events
            </div>
            <Carousel
                autoPlay        // Enables automatic sliding
                interval={5000} // Sets the time interval for each slide (3000ms = 3 seconds)
                infiniteLoop    // Allows the carousel to loop infinitely
                showThumbs={false} // Hides thumbnails if not needed
                showStatus={false} // Hides the status indicator (e.g., "1/3")
                showIndicators={true} // Shows the slide indicators
                stopOnHover={true} // Pauses sliding when hovering over the carousel
                dynamicHeight={true} // Adjusts the height dynamically based on content
                swipeable={false}
                style={{
                    width: "643px",
                    height: "500px"
                }}
            >
                <div>
                    <img src={Tournament} alt="Tournament 1" />
                </div>
                <div>
                    <img src={Tournament2} alt="Tournament 2" />
                </div>
                <div>
                    <img src={Tournament3} alt="Tournament 3" />
                </div>
            </Carousel>


<div className='flex justify-center mb-4'>
                <a target='_blank' href='https://pages.razorpay.com/mrcl'>
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    className='font-bold'
                >
                    Register now
                </Button>

                </a>

            </div>


        </div>
    )
}

export default Events;
