import React from 'react'
import './Services.css'
import CardItem from './CardItem'
import serviceOne from '../Assets/services-one.png'
import serviceTwo from '../Assets/services-two.png'
import serviceThree from '../Assets/services-three.png'

function Services() {
    return (
        <div className='services'>
            <div className='heading'>
                <div className='heading-one'>Make Awesome Heading Section</div>
                <div className='description'>From logo design to website development, hand-picked designers and developers are ready to complete your new project.</div>
            </div>
            <div className='card-items'>
                <CardItem title="Fast Food" symbol={<i class="fa-regular fa-clipboard"></i>} imageUrl={serviceOne} body="Lorem ipsum dolor sit Seamlessly empower fully researched growth strategies interoperable internal." />
                <CardItem title="Drinks & Snacks" symbol={<i class="fa-solid fa-tag"></i>} imageUrl={serviceTwo} body="Lorem ipsum dolor sit Seamlessly empower fully researched growth strategies interoperable internal." />
                <CardItem title="Main Menu Food" symbol={<i class="fa-regular fa-flag"></i>} imageUrl={serviceThree} body="Lorem ipsum dolor sit Seamlessly empower fully researched growth strategies interoperable internal." />
            </div>
        </div>
    )
}

export default Services
