import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import {BsArrowRightShort} from 'react-icons/bs'
function Blog(props) {
  return (
    <>
      
      <div className="container">
            <div className="card p-1">
              <div>
                <img
                  src={props.img}
                  alt=""
                  className="img"
                  width={"100%"}
                  height={"220px"}
                />
              </div>

              <div className="card-text p-4">
                <div className="job-category">{props.cetegary}</div>

                <h5 className="mt-2">
                  {props.title}
                </h5>

                <div className="d-flex">
                  <div className="blog-dot mt-3"></div>
                  <div className="text-secondary px-2 mt-1">{props.date}</div>
                </div>

                <div className="bg-light p-2 d-flex justify-content-center mt-3 hoverblog">

                    <a href="" className="nav-link">Read More</a>

                      <div>
                        <BsArrowRightShort/>
                      </div>

                </div>


              </div>
            </div>
        
        
      </div>
    </>
  );
}

export default Blog;
