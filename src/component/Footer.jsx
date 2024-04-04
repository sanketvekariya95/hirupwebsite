import React from "react";
import { AiOutlineArrowRight } from "react-icons/ai";

function Footer() {
  return (
    <>
      <div className="card pt-5">
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

          <div className="row mt-5">
            <div className="col-lg-2 col-md-6 col-sm-6 mt-3">
              <div className="text-secondary fw-bold">PAGES</div>

              <div className="mt-4">
                <div className="">
                  <a href="" className="nav-link">
                    Home
                  </a>
                </div>
                <div className="mt-3">
                  <a href="" className="nav-link">
                    Home v3
                  </a>
                </div>
                <div className="mt-3">
                  <a href="" className="nav-link">
                    About
                  </a>
                </div>
                <div className="mt-3">
                  <a href="" className="nav-link">
                    Pricing
                  </a>
                </div>
                <div className="mt-3">
                  <a href="" className="nav-link">
                    Jobs
                  </a>
                </div>
                <div className="mt-3">
                  <a href="" className="nav-link">
                    Post a job
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6 mt-3">
              <div className="text-secondary fw-bold">Account</div>

              <div className="mt-4">
                <div className="">
                  <a href="" className="nav-link">
                    Sign In
                  </a>
                </div>
                <div className="mt-3">
                  <a href="" className="nav-link">
                    Sign up
                  </a>
                </div>
                <div className="mt-3">
                  <a href="" className="nav-link">
                    reset Password
                  </a>
                </div>
                <div className="mt-3">
                  <a href="" className="nav-link">
                    User Account
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-2 mt-3">
              <div className="text-secondary fw-bold">Template</div>

              <div className="mt-4">
                <div className="">
                  <a href="" className="nav-link">
                    Stayle Guide
                  </a>
                </div>
                <div className="mt-3">
                  <a href="" className="nav-link">
                    licence
                  </a>
                </div>
                <div className="mt-3">
                  <a href="" className="nav-link">
                    chengelog
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-md-12 mt-3">

              <div className="">
              <div className="text-secondary fw-bold ms-5">SIGN UP TO OUR NEWSLETTER</div>
              <div className="input-title mt-4 ms-3">
            <div className="input-group">
              <input
                type="email"
                className="form-control"
                placeholder="Email Eddress"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append ms-3">
                <button className=" btn-light border-0 text-white" type="button">
                  Get started
                </button>
              </div>
            </div>
          </div>









              </div>




            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
