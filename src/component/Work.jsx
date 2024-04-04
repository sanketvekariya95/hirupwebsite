import React from "react";

function Work(Props) {
  return (
    <>
      <div className="container ">
        <div className="">
          <div className="card p-3">
            <div className="d-flex">
              <div className="mt-2 icon-wrap">
                <img src={Props.img} alt="" width={40} className="pt-1" />
              </div>
              <div className="ms-4 mt-4">{Props.iconname}</div>
            </div>

            <div className="pt-5">
              <p>{Props.pera}</p>
            </div>

            <div className="work-card  d-flex">
              <div className="pe-2">{Props.employee}</div>
              <div>Employees</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Work;
