import React from 'react'
import meta from  '../../../assets/img/meta1.jpg'
import { AiOutlineWhatsApp } from "react-icons/ai";
import './home.css'
import Courses from '../courses/courses';
import Community from '../community/community';
import Plans from '../plans/plans';

function Home() {

    const handleClick= ()=>{
        window.open("https://youtu.be/1wZoGFF_oi4?si=CnzResdDsKu_Iz2g","_blank")
    }


    const handleClickBtn= ()=>{
        window.open("https://legacy.reactjs.org/","_blank")
    }
  return (

    <>
    
    <section>

        <div className='container'>
            <div className='home-container'>
                <div className='home-content'>
                    <h2>WELCOME!!!</h2>
                    <h2 className='section_title'>Learn Everthing For Free!</h2>
                    <p className=''> "Education is the most powerful weapon which you can use to change the world." <br/>  - Nelson Mandela</p>
                    <div className='home-button'>
                        <button onClick={handleClickBtn}>
                            Get Started
                        </button>
                        <button onClick={handleClick}>
                            Watch Now!
                        </button>

                    </div>
                </div>
                <div className='home-image'>
                      <div className='home-img-wrapper'>
                        <div className='box'>
                            <div className='box-image'>
                               <img src={meta} alt=''/>
                            </div>

                        </div>
                        <div className='media-container'>
                            <h3>500+ Students</h3>
                            <AiOutlineWhatsApp color='green'/>
                        </div>

                        <div className='support'>
                            <h3>Support</h3>
                        </div>

                      </div>


                </div>

            </div>
        </div>

    </section>

    

    <Courses/>

    <Community/>

    <Plans/>
    
    
    
    </>
    
  )
}

export default Home