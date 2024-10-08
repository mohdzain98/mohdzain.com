import React, { useEffect, useState } from 'react'

const Topbar = () => {
  const [progress, setProgress] = useState(0)
  useEffect(()=>{
    const handleScroll = ()=>{
      const windowHeigth = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;
      const scrollPercent = (scrollY / (documentHeight - windowHeigth))*100
      setProgress(scrollPercent)
    }
    window.addEventListener("scroll",handleScroll);
    return ()=>{
      window.removeEventListener("scroll",handleScroll)
    }
  })
  return (
    <div id='progress-container' 
    style={{
      height:'2px',
      width:'100%',
      backgroundColor:'transparent',
      position:'fixed',
      top:'0',
      left:'0',
      right:'0',
      // boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
      zIndex: 9999
      }}>

    <div className='progress-fill' 
    style={{
      height:'100%',
      backgroundColor:'red',
      // transition: 'width 0.2s ease-in-out',
      boxShadow: '0 2px 4px rgba(0, 0, 255, 0.4)', 
      width:`${progress}%`
      }}>

    </div>
      
    </div>
  )
}

export default Topbar
