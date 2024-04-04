import React from 'react'
import img from '../assets/images/amazon.svg';
import open from '../assets/images/open-tabale.svg';
import hubs from '../assets/images/hubs.svg';
import shopi from '../assets/images/shopify.svg';
import slack from '../assets/images/slack.svg';
import drop from '../assets/images/dropbox.svg';

function Name() {
  return (
    
    <>
    
    <div className="container">


        <div className="row mt-5">

         <div className="col-lg-2 col-md-4 mt-3">
            <img src={open} alt="" width={150} height={70} />
         </div>
         <div className="col-lg-2 col-md-4 mt-3">
            <img src={hubs} alt="" width={150} height={70}  />
         </div>
         <div className="col-lg-2 col-md-4 mt-3">
            <img src={img} alt="" width={150} height={70} />
         </div>
         <div className="col-lg-2 col-md-4 mt-3">
            <img src={slack} alt="" width={150} height={70}  />
         </div>
         <div className="col-lg-2 col-md-4 mt-3">
            <img src={shopi} alt="" width={150} height={70} />
         </div>
         <div className="col-lg-2 col-md-4 mt-3">
            <img src={drop} alt="" width={150} height={70}  />
         </div>

        </div>



    </div>
    
    </>

  )
}

export default Name