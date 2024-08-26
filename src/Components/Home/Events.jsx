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
                <button className="relative inline-flex h-12 overflow-hidden rounded-full p-[4px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
  <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-[#00CCFF] px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
    Register now
  </span>
</button>


                </a>

            </div>


        </div>
    )
}

export default Events;


