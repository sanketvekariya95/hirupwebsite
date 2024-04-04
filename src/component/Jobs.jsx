import React from "react";
import drimble from "../assets/images/Dribble Icon.svg";
import location from "../assets/images/Location Icon.svg";
import salary from "../assets/images/Salary Icon.svg";

function Jobs(props) {
  return (
    <>
      <div className="bg-light pt-5 ">
        <div className="container">
          <div className="card  card-main">
            <a
              href="/jobs/front-end-developer"
              className="job-border w-inline-block"
            >
              <div className="d-flex mb-3">
                <div className="icon-wrap  justify-content-center">
                  <img src={props.img} alt="" className="icon-large mt-2" />
                </div>
                <div className="mb-3 ms-5">
                  <div className="">{props.iconname}</div>
                  <div className="">{props.date}</div>
                </div>
              </div>
              <div className="mb-3">
                <h6 className="fw-bold text-black">{props.jobname}</h6>
              </div>
              <div className="job-tags d-flex mb-3">
                <div className="job-category">{props.btnone}</div>
                <div className="job-hours">{props.btntwo}</div>
              </div>
              <div className="d-flex ">
                <div className="d-flex me-3">
                  <img src={props.location} alt="" className="icon-regular" />
                  <div>{props.locationname}</div>
                </div>
                <div className="d-flex">
                  <img src={props.salaryicon} alt="" className="icon-regular" />
                  <div>$</div>
                  <div>{props.salary}</div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Jobs;
