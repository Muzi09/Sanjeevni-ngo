import React from 'react'

function About() {
  return (

    <div className='container'>
      <div className='text-[#fff] px-2 py-1 rounded-md  font-semibold text-lg' style={{ background: 'linear-gradient(90deg, rgba(255,99,0,1) 0%, rgba(255,194,103,1) 100%)' }}>
        About Us
      </div>
      <div className='py-6 space-y-6'>
        <section className='bg-gray-100 p-6 rounded-md shadow-md'>
          <h2 className='text-xl font-bold mb-4'>Established in 2018</h2>
          <p className='text-gray-700'>
            Since 2018, Team Sanjeevani has been playing a vital role in shaping & grooming the youth of Nagda. As Sanjeevani stands for Social cause, Leadership & Opportunities, the team provides these qualities to its members in all walks of life.
          </p>
        </section>

        <section className='bg-gray-100 p-6 rounded-md shadow-md'>
          <h2 className='text-xl font-bold mb-4'>Our Events</h2>
          <ul className='list-disc pl-5 text-gray-700'>
            <li>Regular Blood Donation Camps</li>
            <li>Tree Plantation Programs</li>
            <li>Health Camps</li>
            <li>Sports Events</li>
            <li>Festive Events and many more...</li>
          </ul>
        </section>
      </div>

    </div>
  )
}

export default About