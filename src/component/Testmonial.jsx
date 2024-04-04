import React from "react";
import user from '../assets/images/Chimp Icon.svg'
import {BsArrowLeft} from 'react-icons/bs';
import {BsArrowRight} from 'react-icons/bs'

function Testmonial() {
  return (
    <>
      <div className="bg-light mt-5">
        <div className="container">
          <div className="text-center main-2">
            <p className="text-color">TESTMONIAL</p>

            <div className="w-50 mx-auto">
              <h1 className="fw-bold">
                See what users say about our job platform
              </h1>
            </div>
          </div>

          <div className="row">

            <div className="col-lg-6">

              <div className="user bg-white">
                <img src={user} alt="" className="img-fluid" />
              </div>

              <p className="fs-3 fw-semibold">“There are lot of interesting projects that casting directors post on this platform. So many people and companies trust casting through Platform”</p>

              <div className="fs-6 mt-4">
              <span className="text-color">Emily York</span> - Senior Frontend Developer
              </div>


              <div className="d-flex gx-2">

                <div className="user">
                     <BsArrowLeft className="fs-2 text-secondary"/>
                </div>

                <div className="user">
                  <BsArrowRight className="fs-2"/>
                </div>

              </div>



            </div>

            <div className="col-lg-6 mt-5">

              <div className="man-img mx-auto">
                <img src={require('../assets/images/Why Choose Us Image (2).jpg')} alt="" className="img-fluid" />
              </div>


            </div>


          </div>


        </div>
      </div>
    </>
  );
}

export default Testmonial;
