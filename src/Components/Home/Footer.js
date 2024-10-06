import React from 'react'
import '../Styling/Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='text-white bg-dark pt-3'>
        <div className="container" id='copy'>
            <div>
                <p className='text-center' style={{fontSize:'14px'}}> &copy; 2024 Mohd Zain</p>
            </div>
            <div>
                <Link to='https://old.mohdzain.com' target='_blank' rel='noopener' style={{textDecoration:'none', color:'white'}}><p className='text-center' style={{fontSize:'14px'}}>
                Old Site <i class="fa-solid fa-arrow-up-right-from-square fa-xs ms-1"></i></p></Link>
            </div>
            <div>
                <p className='text-center' style={{fontSize:'14px'}}>Published on : 07 Sept, 2022</p>
            </div>
            <div>
                <p className='text-center' style={{fontSize:'14px'}}>Updated on : 06 Oct, 2024  V: 2.0</p>
            </div>
        </div>
    </div>
  )
}

export default Footer
