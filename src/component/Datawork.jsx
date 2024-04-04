import React from 'react'
import Work from './Work'
import spotify from '../assets/images/Spotify Icon.svg';
import fecebook from '../assets/images/Facebook Icon.svg';
import toko from '../assets/images/TokoPedia Icon.svg';

function Datawork() {
 
  let work = [
   
    {
        img: spotify ,
        iconname:'Drimble',
        pera:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, saepe dolorum iusto ut adipisci eveniet.',
        employee:'65'
    },
    {
        img:fecebook,
        iconname:'Fecebook',
        pera:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, saepe dolorum iusto ut adipisci eveniet.',
        employee:'6500'
    },
    {
        img:toko,
        iconname:'tokoindia',
        pera:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, saepe dolorum iusto ut adipisci eveniet.',
        employee:'1115'
    },

  ]




  return (
    <>
    <div className='main-1 container'>
            <h1>Work with exciting companies</h1>
            <p className='text-secondary'>Discover more than 1,600 open positions</p>
        </div>
    <div className='row gx-0'>

       
       {
     work.map((x,i)=>{
        return(
          <>
          
           <div key={i} className='col-lg-4'>
             
             <Work img={x.img} iconname={x.iconname} pera={x.pera} employee={x.employee} />


           </div>
          </>
        )
     })


       }

    </div>
    </>

    

  )
}

export default Datawork