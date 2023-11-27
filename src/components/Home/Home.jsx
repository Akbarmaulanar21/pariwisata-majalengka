import React, {useEffect} from 'react'
import './home.css'

import Aos from 'aos'
import 'aos/dist/aos.css'
import BG from '../../assets/BG.jpg'
const Home = () => {
  // lets create a function to initialize Aos
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className='home'>
      <div className="overlay"></div>
      <video src={BG} autoPlay loop muted type='video/mp4'></video>

      <div className="homeContent container">
        <div className="textDiv">

          <span data-aos="fade-up" className="homeTitle">
            Explore Majalengka
          </span>

          <h1 data-aos="fade-up" className="smallText">
            Search your dream destination
          </h1>
          
        </div>

        {/* <div className="carDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">Search your destination:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter name here ...' />
              <MdOutlineLocationOn className='icon' />
            </div>
          </div>

          <div className="dateInput">
            <label htmlFor="date">Search your date:</label>
            <div className="input flex">
              <input type="date"/>
            </div>
          </div>

          <div className="priceInput">
            <div className="label_total flex">
              <label htmlFor="price">Max price:</label>
              <h3 className="total">
                RP. 100.000
              </h3>
            </div>
            <div className="input flex">
              <input type="range" min='1000' max='100000' />
            </div>
          </div>

          <div className="searchOptions flex">
            <FaFilter className='icon'/>
            <span>More Filters</span>
          </div>

        </div> */}

        <div data-aos="fade-up" className="buttonDiv">
            <button className='btn'>
              <a href="#">Explore</a>
            </button>
        </div>
      </div>
    </section>
  )
}

export default Home
