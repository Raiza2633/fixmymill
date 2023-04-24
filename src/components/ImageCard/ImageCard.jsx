import React from 'react'
import './ImageCard.css'

const ImageCard = ({src, content}) => {
  return (
    <div className='single-image-card-container'>
        <div><img src={src}/></div>
        <div className='content'>{content}</div>
    </div>
    
  )
}

export default ImageCard