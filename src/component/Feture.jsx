import React from "react";
import Pointfeture from "./Pointfeture";

function Feture() {
  return (
    <>
      <div className="main-1">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="img-man img-fluid">
                <img
                  src={require("../assets/images/_Feature Image man.webp")}
                  alt=""
                  width={"100%"}
                  height={"100%"}
                  className="object-fit-cover"
                />
                <div className="d-flex justify-content-center">
                  <div className="partner ">
                    <div>
                      Partener with{" "}
                      <span className="header-company-span">Glassdoor</span> and{" "}
                      <span className="">Linkdin</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-6">
              <div className="text-color">
                <h5>WHY CHOOSE US</h5>
              </div>
              <div className="mt-2">
                <h1 className="fs-1 w-75 fw-bold">Build a custom membership site with locked content.</h1>
              </div>
              <p className="mt-4 text-secondary">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna, sit amet pulvinar diam. Sed laoreet feugiat consequat.</p>


              <div>

                   <Pointfeture/>
                   <Pointfeture/>
                   <Pointfeture/>

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Feture;
