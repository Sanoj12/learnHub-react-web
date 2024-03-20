import React from 'react'
import './about-us.css'
import { FaLinkedin ,FaFacebook, FaWhatsapp } from "react-icons/fa6";
import { BsMessenger } from "react-icons/bs";

function About() {
  return (
   <div className='container'>
    <div className='about-us-container'>
        <div className='personal-details'>
             <h2>Personal Details</h2>
             <div className='personal-info'>
                <h2 className='my-name'>
                     Sanoj C Sam

                </h2>
                <p className='personal-role'>Role: MERN STACK DEVELOPER</p>
                <p className='personal-role'>Mob.NO:8921786185</p>
                <p className='personal-role'>Email:sanojcsam123@gmail.com</p>
             </div>
             <div className='social-media'>
                 <span className='social-media-logo'>
                    <a href=" https://www.linkedin.com/in/sanoj-c-sam-1631aa158/"  target="_blank"  >
                    <FaLinkedin style={{color:'#0000CD'}}/>
                    </a>

                    <a href=" "  target="_blank" className='fb-a'>
                    <FaFacebook  style={{color:'#1E90FF'}}/>
                    </a>

                    <a href=" "  target="_blank" >
                    < BsMessenger />
                    </a>

                    <a href=" "  target="_blank" >
                    < FaWhatsapp style={{color:"#008000"}}/>
                    </a>


                 </span>

             </div>

        </div>

        <div className='personal-descriptions'>
            <h1 className='description-heading'>
                About-Us
            </h1>

            <p>
                Passionat about web development goal is to be achieve the good position by doing satisfying work in the IT Field.Strongly focused to complete task in fased-faced envirnoment.
            </p>

        </div>
    </div>

   </div>
  )
}

export default About