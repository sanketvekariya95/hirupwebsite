import React from 'react'
import Blog from './Blog'
import { BsArrowLeft } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import {BsArrowRightShort} from 'react-icons/bs'

function Datablog() {

    let blog = [
    
        {
            img:require('../assets/images/Blog Image 01.jpg'),
            cetegary:'Education',
            title:'How to make a great first impression everytime',
            date:'OCTOBER 24, 2022'
        },
        {
            img:require('../assets/images/_Blog Image 03.jpg'),
            cetegary:'Trends',
            title:'Find out the best paying careers in 2022',
            date:'OCTOBER 24, 2022'
        },
        {
            img:require('../assets/images/_Blog20(3)-p-800.jpeg'),
            cetegary:'Careers',
            title:'Ten things to nail your next job Interview',
            date:'MARCH 24, 2021'
        },


    ]

  return (
   <>
   <div className="container main-2">
        <div className="row">
          <div className="col-lg-8">
            <h6 className="text-color">Blog</h6>
            <h1>Get the latest news about jobs!</h1>
          </div>
          <div className="col-lg-4">
            <div className="d-flex justify-content-end gx-2">
              <div className="user">
                <BsArrowLeft className="fs-2 text-secondary" />
              </div>

              <div className="user">
                <BsArrowRight className="fs-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
  
  <div className='row gx-0'>

    {
        blog.map((x,i)=>{
            return(
                <div key={i} className='col-lg-4'>

                    <Blog img={x.img} cetegary={x.cetegary} title={x.title} date={x.date}/>



                </div>
            )
        })
    }












  </div>


   
   
   
   </>
  )
}

export default Datablog