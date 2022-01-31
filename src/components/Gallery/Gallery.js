import React from 'react'
import photo1 from '../../assets/img_beach.jpg'
import photo2 from '../../assets/img_bowl_of_brooklands.jpg'
import './Gallery.css'

const Gallery = () => {
  return (
    <section className="gallery">
      <div className="img-container">
        <img className="gallery-image img-1" src={photo1} alt="Fin Rah Zel walking on a beach."/>
        <img className="gallery-image img-2" src={photo2} alt="Fin Rah Zel playing on stage at the Bowl Of Brooklands."/>
      </div>
    </section>
  )
}

export default Gallery;