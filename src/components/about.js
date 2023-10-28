import React from 'react'
import './styles/about.css'
const about = () => {
  return (
    <>
        <div className="card text-bg-light">
        <img src="slide.webp" className="card-img" alt="img-about" />
        <div className="card-img-overlay container mt-3">
          <h2 className="text-white heading-text " data-aos="fade-down">
            Autuma Adventures
          </h2>
          <p className="text-white para-write" data-aos="fade-left">
            Explore best selling power wheelchairs
          </p>
          <p className="text-white para-write1" data-aos="fade-left">
            Enjoy Free white glove delivery on full size power wheel chairs
          </p>
          <button type="button" class="btn btn-lg butt">Shop Power wheelchairs</button>
        </div>
      </div>
    </>
  )
}

export default about