import React from 'react'
import Jobs from './Jobs'
import drimble from '../assets/images/Dribble Icon.svg';
import location from '../assets/images/Location Icon.svg';
import  salary from '../assets/images/Salary Icon.svg';
import fecebook from '../assets/images/Facebook Icon.svg';
import toko from '../assets/images/TokoPedia Icon.svg';
import spotify from '../assets/images/Spotify Icon.svg';
import paypal from '../assets/images/PayPal Icon.svg';

function Datacard() {

    let data = [

        {
             img:drimble,
             iconname:'Drimble',
             date:'october 25,2022',
             jobname:'Front End Developer',
             btnone:'marketing',
             btntwo:'Part Time',
             location:location,
             locationname:'San Antonio',
             salaryicon:salary,
             salary:'130k-160k',
        },
        {
             img:drimble,
             iconname:'Drimble',
             date:'october 25,2022',
             jobname:'Backend Developer',
             btnone:'Design',
             btntwo:'Full Time',
             location:location,
             locationname:'Dallas',
             salaryicon:salary,
             salary:'50k-60k',
        },
        {
             img:toko,
             iconname:'Tokopedia',
             date:'march 30,2021',
             jobname:'scrum master',
             btnone:'marketing',
             btntwo:'Part Time',
             location:location,
             locationname:'San Antonio',
             salaryicon:salary,
             salary:'130k-160k',
        },
        {
             img:fecebook,
             iconname:'Fecebook',
             date:'march 30,2021',
             jobname:'Lead Technical Architect',
             btnone:'Technology',
             btntwo:'full Time',
             location:location,
             locationname:'Melborne',
             salaryicon:salary,
             salary:'230k-360k',
        },
        {
             img:spotify,
             iconname:'Shopify',
             date:'march 30,2021',
             jobname:'Digital media Strategist',
             btnone:'Business',
             btntwo:'Casual',
             location:location,
             locationname:'New york',
             salaryicon:salary,
             salary:'50k-60k',
        },
        {
             img:paypal,
             iconname:'Paypal',
             date:'march 30,2021',
             jobname:'Saystem Administation',
             btnone:'Business',
             btntwo:'Casual',
             location:location,
             locationname:'Cali fronia',
             salaryicon:salary,
             salary:'40k-60k',
        },
    ]


  return (
    
   <>
    <div className='row gx-0'>

{

data.map((x,i)=>{

 return(
     <div key={i} className='col-md-6 col-lg-4'>

         <Jobs img={x.img} iconname={x.iconname} date={x.date} jobname={x.jobname} btnone={x.btnone} btntwo={x.btntwo} locationname={x.locationname} salary={x.salary} salaryicon={x.salaryicon} location={x.location} />



     </div>
 )


})


}

</div>
   
   </>

  )
}



export default Datacard