import React, { useEffect, useRef, useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/Home.css'
import Slider from '../components/Slider'
import { FcNext, FcPrevious } from 'react-icons/fc'

const Home = () => {
    const sliderRef = useRef(null);
      const cardRefs = useRef([]);
    const sliderRef1 = useRef(null);
      const cardRefs1 = useRef([]);
     const [visibleCards, setVisibleCards] = useState([]);

  const scrollLeft = () => {

    sliderRef.current.scrollBy({ left: -300, behavior: 'smooth' })
  };

  const scrollRight = () => {
    sliderRef.current.scrollBy({ left: 300, behavior: 'smooth' });
  };
    useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index'));
            setVisibleCards(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    cardRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => {
      cardRefs.current.forEach(ref => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);
  const company = [
    // '/company/company (1).png',
    // '/company/company (2).png',
    // '/company/company (3).png',
    '/company/company (4).png',
    '/company/company (5).png',
    '/company/company (6).png',
    '/company/company (7).png',
  ]
  return (
    <div>
      <Header />
      <div className="home-main">
        <Slider />
        <div className='home-company-names'>
          {
            company.map((img, index) => (
              <img key={index} src={img} alt="" />
            ))
          }
        </div>
         <section className='home-new-tech'>
          <h1>NEW ARRIVALS</h1>
          <div className="home-slider-wraper">
            <button onClick={scrollLeft} className="nav-button"><FcPrevious /></button>
            <div className='home-new-tech-div' ref={sliderRef1}>
              {
                company.map((img, index) => (
                  <div key={index}  className={`product-card bg-white  ${visibleCards.includes(index) ? 'visible' : ''}`}
                  ref={el => cardRefs1.current[index] = el}
                  data-index={index}>
                    <img src={img}  className='home-slider-image' alt="" />

                    <h2>T-shirt with Tape Details</h2>

                    <p>⭐⭐⭐⭐⭐ 5/5</p>

                    <h2>$120</h2>
                  </div>
                ))
              }

            </div>
             <button onClick={scrollRight} className="nav-button"><FcNext /></button>
          </div>
          <div className='text-center mb-0'><button className='home-view-more-tech-btn-2' type='button'>View more</button></div>
        </section>
        <hr className='home-hr' />
        <section className='home-new-tech'>
          <h1>TOP SELLING</h1>
          <div className="home-slider-wraper">
            <button onClick={scrollLeft} className="nav-button"><FcPrevious /></button>
            <div className='home-new-tech-div' ref={sliderRef}>
              {
                company.map((img, index) => (
                  <div key={index}  className={`product-card bg-white  ${visibleCards.includes(index) ? 'visible' : ''}`}
                  ref={el => cardRefs.current[index] = el}
                  data-index={index}>
                    <img src={img}  className='home-slider-image' alt="" />

                    <h2>T-shirt with Tape Details</h2>

                    <p>⭐⭐⭐⭐⭐ 5/5</p>

                    <h2>$120</h2>
                  </div>
                ))
              }

            </div>
             <button onClick={scrollRight} className="nav-button"><FcNext /></button>
          </div>
          <div className='text-center mb-0'><button className='home-view-more-tech-btn-2' type='button'>View more</button></div>
        </section>

        <section >
          <div className="home-category">
            <h1>BROWSE BY PERFORMANCE</h1>
            <div>
              <div className="performance-product-div">
                <div class="flex w-full">
                  <div className='performance-product-outer-image-1'><h3>MAC BOOK</h3><img className='img-1' src="/laptop (1).png" alt="" /></div>
                  <div className='performance-product-outer-image-2'><h3>Gaming</h3>  <img className='img-4' src="/laptop (4).png" alt="" /></div>
                </div>

                <div class="flex w-full">
                  <div className='performance-product-outer-image-3'><h3>MAC BOOK</h3>  <img className='img-3' src="/laptop (3).png" alt="" /></div>
                  <div className='performance-product-outer-image-4'><h3>For Student</h3><img className='img-2' src="/laptop (2).png" alt="" /></div>
                </div>
              </div>
            </div>
          </div>

        </section>


      </div>
      <Footer />
    </div>
  )
}

export default Home
