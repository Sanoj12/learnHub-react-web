import React from 'react'
import './community.css'
import tc from '../../../assets/img/tc.png'

function Community() {
  return (
    <div className='container'>
        <div className='community-wrapper'>
            <div className='community-image'> 
               <img src={tc} alt=''/>
            </div>

            <div className='community-content'>
                <h2 className='section_title'>
                    Join Our Free Tech Community
                </h2>

                <p>
                    unlock the power of knowledge and iinovation by joining our vibrant and free  Whtasapp tech community
                </p>
                <button className='register-button'>Join Now</button>
            </div>
  
        </div>
        

    </div>
  )
}

export default Community