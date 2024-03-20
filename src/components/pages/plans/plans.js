import React from 'react'
import './plans.css'

function Plans() {

   const planData=[
      {
        title:"Regular",
        price:"$0",
        duration:"/month",
        color:'#fff',
        features :[
            'Unlimited access to the courses',
            'Customer support',
            'Personal mentor',
            'Standar options',
            '5 classes per week'
        ]
      },
      {
        title:"Premium",
        price:"$100",
        duration:"/month",
        color:'#ff6347',
        features :[
            'Unlimited access to the courses',
            'Customer support',
            'Personal mentor',
            'Standar options',
            '5 classes per week'
        ]
      },
      {
        title:"Standard",
        price:"$10",
        duration:"/month",
        color:'#fff',
        features :[
            'Unlimited access to the courses',
            'Customer support',
            'Personal mentor',
            'Standar options',
            '5 classes per week'
        ]
      }
   ];


  return (
   <div className='container'>
      <div className='plans-heading'>
       
         <h2 className='section_title'>
            Premium Plans
         </h2>

         <p>Unlock elite tech service with our Premium pricing plan and soar ahead of the competition</p>
      </div>

      <div className='plans-wrapper'>

        {
            planData.map((plansItem,index)=>(

                <div className='plans-items' >
                <div className='plans-item_top' style={{background:plansItem.color}}>
                    <h2 className='section_title'>
                        {plansItem.title}
                    </h2>
    
                    <h2 className='plans_section_title'>
    
                        {plansItem.price} <span>{plansItem.duration}</span>
                    </h2>
    
                </div>
    
                <div className='plans-service'>
                    <ul>
                        {
                            plansItem.features.map((feature,index)=>(
                                <li key={index}>{feature}</li>
                            ))
                        }
                        
                    </ul>
    
                    <button className='plans-button'>JOIN</button>
    
                </div>
            </div>

            ))
        }
       

      </div>
   </div>
  )
}

export default Plans