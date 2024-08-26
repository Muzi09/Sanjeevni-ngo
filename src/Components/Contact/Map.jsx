import React from 'react';


const Map = () => {



    return (
        <div className="container">
            <div className="row">
            </div>
            <div className="row">
                <div className=" mb-4">
                    <div className="map mb-4">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14640.657432766597!2d75.38762905541992!3d23.454535200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396475cfa91469db%3A0x3e8b97762addd519!2sF%20Block!5e0!3m2!1sen!2sin!4v1723662608782!5m2!1sen!2sin"
                            width="100%"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                        ></iframe>
                    </div>
                    <div  >
                        <p className='d-flex justify-content-between'>
                            <strong style={{ color: 'var(--primary-color)' }}>Address</strong> <div className='text-end'>F-13 Birlagram, Nagda, Dist (Ujjain), Madhya Pradesh 456331</div> 
                        </p>
                        <p className='d-flex justify-content-between'>
                            <strong style={{ color: 'var(--primary-color)' }}>Phone</strong> <div className='text-end'>9039381859</div> 
                        </p>
                        <p className='d-flex justify-content-between'>
                            <strong style={{ color: 'var(--primary-color)' }}>Email</strong>  <div className='text-end'>beingsanjeevanifoundation@gmail.com</div>  
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Map;