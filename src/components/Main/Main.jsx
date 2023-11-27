import React, {useEffect} from 'react'
import './main.css'
import Aos from 'aos'
import 'aos/dist/aos.css'

//import icons
import { HiOutlineLocationMarker } from "react-icons/hi";
import { HiOutlineClipboardCheck } from "react-icons/hi";


// import components
import img from '../../Assets/img.jpg'
import img2 from '../../Assets/img2.jpg'

// named data

const Data = [
  {
    id: 1,
    imgSrc: img,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '$ 1500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'

  },
  {
    id: 2,
    imgSrc: img2,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '$ 1500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  },
  {
    id: 3,
    imgSrc: img2,
    destTitle: 'Paris',
    location: 'France',
    grade: 'CULTURAL RELAX',
    fees: '$ 1500',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.'
  }
]
function Main() {
    // lets create a function to initialize Aos
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="main container section">

      <div className="secTitle">
        <h3 data-aos="fade-right" className="title">
          Most Visited destination
        </h3>
      </div>

      <div className="setContent grid">
        
      {
        Data.map(({id, imgSrc, destTitle, location, grade, fees, description}) => {
          return (
            <div key={id} data-aos="fade-up" className="singleDestination">

              <div className="imageDiv">
                <img src={imgSrc} alt={destTitle} />
              </div>

              <div className="cardInfo">
                <h4 className="destTitle">
                  {destTitle}
                </h4>
                <span className="continent flex">
                  <HiOutlineLocationMarker className='icon'/>
                  <span className="name">{location}</span>
                </span>

                <div className="fees flex">
                  <div className="grade">
                    <span>{grade} <small>+1</small></span>
                  </div>
                  <div className="price">
                    <h5>{fees}</h5>
                  </div>
                </div>

                <div className="desc">
                  <p>{description}</p>
                </div>

                <button className='btn flex'>
                  details <HiOutlineClipboardCheck className='icon' />
                </button>
              </div>
            </div>
          )
        })
      }
      </div>

    </section>
  )
}

export default Main
