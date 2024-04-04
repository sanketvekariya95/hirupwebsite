import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
import Company from './Company';

function Header() {
  return (

    <>

    <div className="">
        <div className="text-center bg-black p-3 ">
            <div className="banner-text-wrapper d-flex justify-content-center text-white">
            <div className="paragraph-small">Discover over 1,000+ premium webflow components today!
            </div>
       <div className='ms-3 align-items-center  d-md-flex d-inline'> <a href="http://www.flowbase.co" className="btn  btn-danger ps-2 p-0 pe-2">Unlock More</a></div>
        </div>
        </div>
        </div>


        <nav className="navbar navbar-expand-lg bg-white p-3 shadow-sm p-3 mb-5 bg-white fixed-top ">
  <div className="container">
  <div className="d-flex">
            <div>
              <AiOutlineArrowRight className="text-color fs-3 mt-2 fw-bolder" />
            </div>
            <div>
              <a className="navbar-brand fs-3" href="#">
                HireUp
              </a>
            </div>
          </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto w-75  mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Company</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="">Browser</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Blog</a>
        </li>
      </ul>
      <form className="d-flex  justify-content-between" role="search">
       <a href="" className='nav-link d-block pe-3 mt-2'>Post a job</a>
        <button className="btn btn-outline btn-light text-white d-inline" type="submit">Login</button>
      </form>
    </div>
  </div>
</nav>



    </>
    
  )
}

export default Header