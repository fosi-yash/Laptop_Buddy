import React, { useEffect, useState } from 'react'
import './style/Slider.css'
import { useRef } from 'react'

const Slider = () => {
  const [count, setCount] = useState(0)
  const images = ['/banner.jpg', '/banner1.jpg', '/banner.jpg', '/banner1.jpg']
  const length = images.length;
  const timeoutRef = useRef(null);



  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Clear any existing timeout
    }
  };
  const nextBanner = () => {
    resetTimeout();
    setCount(count === length - 1 ? 0 : count + 1);
  };

  const previousBanner = () => {
    resetTimeout();
    setCount(count === 0 ? length - 1 : count - 1);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setCount((prevIndex) => (prevIndex === length - 1 ? 0 : prevIndex + 1));
    }, 2000);

    return () => {
      resetTimeout(); // Cleanup on unmount or before next effect
    };
  }, [count, length]);
  return (
    <div >

      <div className='slider-image-div flex '>
        <div className=" slider-previous-image ">
          <i className="fa-solid fa-2xl   fa-circle-chevron-left" onClick={previousBanner}></i>
        </div>
        <img className=' slider-image' src={images[count === images.length ? 0 : count]} alt="" />
        <div className="slider-next-image">
          <i className="fa-solid fa-2xl  fa-circle-chevron-right" onClick={nextBanner}></i>
        </div>
        <div className='flex slider-dot-div'>
          {images.map((item, index) => (


            <div key={index} className={`${index === count ? 'slider-dot-active' : ''} slider-outer-div`}>
              <div className={`${index === count ? 'slider-inner-dot-active' : ''} slider-inner-dot`} ></div>
            </div>

          ))}
        </div>
      </div>

    </div>


  )
}

export default Slider
