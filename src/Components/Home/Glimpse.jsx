import React from 'react';
import Glimpse1 from "../../Assets/Glimpse-1.JPG";
import Glimpse2 from "../../Assets/Glimpse-2.JPG";
import Glimpse3 from "../../Assets/Glimpse-3.JPG";
import Glimpse4 from "../../Assets/Glimpse-4.JPG";
import Glimpse5 from "../../Assets/Glimpse-5.JPG";

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Ensure this is imported for styling
import { TextField, Button } from '@mui/material';

function Glimpse() {
    return (
        <div className='container mb-5'>

            <div className='text-[#fff] px-2 py-1 mb-4 rounded-md font-semibold text-lg' style={{ background: 'linear-gradient(90deg, rgba(255,99,0,1) 0%, rgba(255,194,103,1) 100%)' }}>
                Glimpses of previous activities
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
                    <img src={Glimpse1} alt="Glimpse 1" />
                </div>
                <div>
                    <img src={Glimpse2} alt="Glimpse 2" />
                </div>
                <div>
                    <img src={Glimpse3} alt="Glimpse 3" />
                </div>
                <div>
                    <img src={Glimpse4} alt="Glimpse 4" />
                </div>
                <div>
                    <img src={Glimpse5} alt="Glimpse 5" />
                </div>
            </Carousel>

        </div>
    )
}

export default Glimpse;
