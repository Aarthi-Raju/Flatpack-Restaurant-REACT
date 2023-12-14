import React from 'react'
import { Link } from 'react-router-dom'
import './CardItem.css'

function CardItem({ title, imageUrl, body, symbol }) {
    return (
        <div className='card-container'>
            <div className='image-container '>
                <img src={imageUrl} alt="" />
            </div>
            <div className='card-title'>{title}</div>
            <div className='card-body'>{body}</div>
            <button><a>{symbol}<span>Order Meal</span></a></button>
        </div>
    )
}

export default CardItem
