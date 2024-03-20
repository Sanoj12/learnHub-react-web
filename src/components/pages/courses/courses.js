import React from 'react'
import './courses.css'
import ai from '../../../assets/img/ai.png'
import sd from  '../../../assets/img/sd.png'
import dg from   '../../../assets/img/dg.png'
import hacker from  '../../../assets/img/hacking.png';


function Courses() {

    const courseData=[{
        title:"AI Development",
        description:"Master AI Development",
        img:ai
    },
    {
        title:"Digital Marketing",
        description:"Master Digital Marketing",
        img:dg

    },
    {
        title:"Software Development",
        description:"Master Software Development",
        img:sd
    },
    {
        title:"Cyber Security",
        description:"Master Cyber Security",
        img:hacker
    }

    


]
  return (
    <div className='container course-container'>
         <div className='course-top'>
            <h2 className='section_title'>
                Our Free Courses

            </h2>
            <p className=''>The Top Trending Free Courses With Free Certificates</p>

           <div className='course-wrapper'>

            {
                courseData.map((courses,index)=>(
                    <div className='course-item' key={index}>
                    <span className='course-icon'>
                        <img src={courses.img} alt=''/>
    
                    </span>
    
                   <div className='course-content'>
                     <h4>{courses.title}</h4>
                     <p>
                       {courses.description}
                     </p>
                    </div> 
    
                </div>
                ))
            }
           

           </div>

         </div>

    </div>
    
  )
}

export default Courses