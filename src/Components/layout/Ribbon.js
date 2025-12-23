import React from 'react'
import '../../pages/home/Styling/Ribbon.css'

const Ribbon = ({value, color="#75e0ee"}) => {
  return (
    <div id='ribbon'>
      <div className='ribbon' style={{backgroundColor:color}}>{value}</div>
    </div>
  )
}

export default Ribbon
