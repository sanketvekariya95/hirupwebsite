import React from "react";
import user from '../assets/images/Two-user.svg';

function Pointfeture() {
  return (
    <>
      <div class="bg-light d-flex point mt-3 p-1 align-items-center">
        <div class="icon-wrap-regular me-3">
          <img
            src={user}
            alt=""
            width={'45px'}

            class="icon-regular"
          />
        </div>
        <div className="pt-1">
          <div class=" ">
            <div class="subheading-regular">Add a feature point here</div>
          </div>
          <p class="paragraph-small text-secondary">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </>
  );
}

export default Pointfeture;
