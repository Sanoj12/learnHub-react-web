import React from 'react'
import './header.css'
import logo from '../../assets/img/logo.jpg'
import { Link } from 'react-router-dom'
function Header() {

    const nav_titles=[{
        path:'/',display:'Home'
    },
    {
        path:'/services',display:'Services'
    },
    {
        path:'/courses',display:'Courses'
    },
    {
        path:'/about-us',display:'About-us'
    }
]
  return (
    <header className='header'>
        <div className='container'>
            <div className='nav_container'>
                <div className='logo'>
                    <div className='logo-img'>
                       <img src={logo} alt=''/>
                    </div>
                    <h2>LearnHub</h2>  
                </div>

              
                <div className='nav_menu'>
                    <ul className='menu'>
                     {
                        nav_titles.map((item)=>(
                            <li className='menu_items'><Link to={item.path}>{item.display}</Link></li>
                        ))
                     }
                        
                      

                    </ul>

                </div>

              

            </div>

        </div>

    </header> 
    )
}

export default Header