import React from "react";

function Explore() {
  return (
    <>
      <div className="container main-2">
        <div className="bg-light">
          <div className="d-flex justify-content-center search">
            <div className="user1">
              <img
                src={require("../assets/images/_Magnifying Glass Icon.png")}
                alt=""
              />
            </div>
          </div>

          <div className="mt-4 text-title text-center">
            <h1>Explore a job now!</h1>

            <div className="title mt-5">
              <p className="">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
                rhoncus pharetra cursus. Suspendisse sodales porta leo, ac
                placerat ex pretium quis.
              </p>
            </div>
          </div>

          <div className="input-title mt-5">
            <div className="input-group mb-3">
              <input
                type="text"
                className="form-control"
                placeholder="Search..........."
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div className="input-group-append">
                <button className=" btn-light border-0 text-white" type="button">
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Explore;
