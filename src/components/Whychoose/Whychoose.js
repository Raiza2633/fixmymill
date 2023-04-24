import React from 'react';
import ImageCard from '../ImageCard/ImageCard';

import TimePNG from '../../images/time.png';
import HomePNG from '../../images/home.png';
import HandPNG from '../../images/hand.png';
import BatchPNG from '../../images/batch.png';

import "./Whychoose.css"

const Whychoose = () => {
    const arr = [
        {
            src: TimePNG,
            content: 'Service in 24 hrs or fix it for free',
        },
        {
            src: HomePNG,
            content: '20000+ Happy customers',
        },
        {
            src: HandPNG,
            content: 'Provides best services',
        },
        {
            src: BatchPNG,
            content: 'Up to 2 years service warranty ',
        },
    ]
  return (
    <section className='solve-container'>
        <h2 className='solve-heading'>
            Why choose <span style={{fontWeight: 600}}>Solve My Mill?</span>
        </h2>
        <div className='image-card-container'>{arr.map((item, i) =>(

          <ImageCard key={i}  src={item.src} content={item.content}/>

        ))}</div>
    </section>
  )
}

export default Whychoose