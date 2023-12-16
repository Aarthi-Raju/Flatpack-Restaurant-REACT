import React from 'react'
import './Branding.css'
import brandOne from '../Assets/bigcommerce.png'
import brandTwo from '../Assets/foursquare.png'
import brandThree from '../Assets/squarespace.png'

function Branding() {
  return (
    <div className='branding'>
      <div className='trust'>
        <div className='heading'>How Trust PixFort</div>
        <div className='heading2'>The Best Companies Which Trust Our Digital Goods</div>
      </div>
      <img src={brandOne} alt="" />
      <img src={brandTwo} alt="" />
      <img src={brandThree} alt="" />
    </div>
  )
}

export default Branding
