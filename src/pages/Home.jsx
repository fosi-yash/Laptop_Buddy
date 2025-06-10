import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import '../styles/Home.css'
import Slider from '../components/Slider'

const Home = () => {
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
          <div className='home-new-tech-div'>
            {
              company.map((img, index) => (
                <div key={index}>
                  <img src={img} alt="" />

                  <h2>T-shirt with Tape Details</h2>
                  
                    <p>⭐⭐⭐⭐⭐ 5/5</p>
                  
                  <h2>$120</h2>
                </div>
              ))
            }

          </div>
            <div className='text-center '><button className='home-view-more-tech-btn' type='button'>View more</button></div>
        </section>
        <hr className='home-hr'/>
        <section className='home-new-tech'>
          <h1>TOP SELLING</h1>
          <div className='home-new-tech-div'>
            {
              company.map((img, index) => (
                <div key={index}>
                  <img src={img} alt="" />

                  <h2>T-shirt with Tape Details</h2>
                  
                    <p>⭐⭐⭐⭐⭐ 5/5</p>
                  
                  <h2>$120</h2>
                </div>
              ))
            }

          </div>
            <div className='text-center mb-0'><button className='home-view-more-tech-btn-2' type='button'>View more</button></div>
        </section>

       <section >
        <div className="home-category">
          <h1>BROWSE BY PERFORMANCE</h1>
          <div>
            <div className="performance-product-div">
              <img src="/laptop.jpg" alt="" />
              <img src="/laptop1.jpg" alt="" />
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
