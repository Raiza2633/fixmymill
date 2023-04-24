import React from 'react'
import './ServiceCard.css';

const ServiceCard = ({title, list}) => {
  return (
    <div className='card-container'>
        <div className='title'>{title}</div>
        <ul className='list-container'>
            {list.map((item, i) => (
                <li key={i}>{item}</li>
            ))}
        </ul>
        </div>
  )
}

export default ServiceCard