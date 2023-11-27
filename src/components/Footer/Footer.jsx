import React, {useEffect} from 'react'
import './footer.css'
import video from '../../Assets/video.mp4'
import { FiSend } from 'react-icons/fi'
import { FaMountainSun } from "react-icons/fa6";
import { AiFillInstagram } from "react-icons/ai";
import { FiChevronRight } from "react-icons/fi";
import Aos from 'aos'
import 'aos/dist/aos.css'

function Footer() {
  // lets create a function to initialize Aos
  useEffect(() => {
    Aos.init({duration: 2000})
  }, [])

  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video} loop autoPlay muted type="video/mp4"></video>
      </div>

      <div className="setContent container">
        <div className="contactDiv flex">
          <div data-aos="fade-up" className="text">
            <small>KEEP IN TOUCH</small>
            <h2>Explore with us</h2>
          </div>

          <div className="inputDiv flex">
            <input data-aos="fade-up" type="text" placeholder='Enter Email Address...' />
            <button data-aos="fade-up" className='btn flex' type='submit'>
              SEND <FiSend className='icon'/>
            </button>
          </div>
        </div>

        <div className="footerCard flex">
          <div className="footerIntro flex">
            <div className="logoDiv">
              <a href="#" className='logo flex'>
                <FaMountainSun className='icon' />  Pariwisata.
              </a>
            </div>

            <div data-aos="fade-up" className="footerParagraph">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga consequuntur distinctio est itaque dignissimos incidunt, eveniet odio explicabo similique, sed accusamus enim, facilis accusantium vitae optio repudiandae dolorem? Nisi, eum!
            </div>

            <div data-aos="fade-up" className="footerSocials">
              <AiFillInstagram className='icon'/>
              <AiFillInstagram className='icon'/>
              <AiFillInstagram className='icon'/>
            </div>
          </div>

          <div className="footerLinks grid">
            {/* Group One */}
            <div data-aos="fade-up" data-aos-duration="3000" className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                services
              </li>

              
            </div>

            {/* Group Two */}
            <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                services
              </li>

              
            </div>

            {/* Group Three */}
            <div data-aos="fade-up" data-aos-duration="5000" className="linkGroup">
              <span className="groupTitle">
                Our Agency
              </span>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                services
              </li>

              <li className="footerList flex">
                <FiChevronRight className='icon'/>
                services
              </li>

              
            </div>
          </div>

          <div className="footerDiv flex">
            <small>Pariwisata Website</small>
            <small>Copyright reversed 2023</small>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
