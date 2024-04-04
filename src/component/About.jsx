import React from 'react'

function About() {
  return (
    <div className='container'>


    <div className='d-flex bg-light p-2 bg-color'>
        <div className='pe-2 ps-2 text-primary shadow-lg bg-white'>
            New
        </div>
        <div>
        Stay connected to get upcoming jobs
        </div>

    </div>


    <div className='row mt-5'>


        <div className='col-lg-6'>
        <h2 className='text'>Find the most exciting jobs in tech</h2>
        </div>

        <div className='col-lg-6 mt-5 fs-5'>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et. <a href="" className=''>Sign in</a> or <a href="">sign up</a> to get started!</p>
        </div>
    </div>
</div>


  )
}

export default About