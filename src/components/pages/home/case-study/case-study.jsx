import './case-study.css';
import ctaImg from '/src/assets/cta-img.svg';
import { IoArrowBackCircleOutline, IoArrowForwardCircleOutline } from "react-icons/io5";
import { LuCircleArrowRight, LuCircleArrowLeft } from "react-icons/lu";
import { useState, useRef } from 'react';



const CaseStudy = () => {


  const case_studies_list = [
    'For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.',
    'For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.',
    'For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  
  // Change slide manually
  const changeSlide = (direction) => {
    setCurrentIndex((prev) => (prev + direction + case_studies_list.length) % case_studies_list.length);
  };

  

  return (
    <section className='case-container'>
      <div className='cta container'>
        <div className='cta-left'>
          <h3 className='font-h3'>Let’s make things happen</h3>
          <p className='font-p'>
            Contact us today to learn more about how our digital marketing services can help your business grow and succeed online.
          </p>
          <button>Get your free proposal</button>
        </div>
        <div className='cta-right'>
          <img src={ctaImg} alt='cta_img' />
        </div>
      </div>

      <div className='case-studies-container container'>
        <div className='case-heading'>
          <h2 className='font-h2'>
            <mark>Case Studies</mark>
          </h2>
          <p className='font-p'>
            Explore Real-Life Examples of Our Proven Digital Marketing Success through Our Case Studies
          </p>
        </div>

        <div className='case-studies'>
            <div className='cs-list'>
              {case_studies_list.map((item,index)=>(
                <div className='cs-list-card' key={index}>
                    <p>
                        {item}
                    </p>
                    <a href="">Learn more &#8599;</a>
                </div>
              ))}
            </div>
          <div
            className='cs-slider-wrapper'
            ref={sliderRef}
          >
            <div
              className='cs-slider'
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {case_studies_list.map((item, index) => (
                <div className='cs-slider-card' key={index}>
                  <p>{item}</p>
                  <a href="#">Learn more &#8599;</a>
                </div>
              ))}
            </div>
          </div>

          <div className='controls'>
            <button onClick={() => changeSlide(-1)}>
              <IoArrowBackCircleOutline size={40} className=''/>
            {/* <LuCircleArrowLeft size= {40}/> */}
            </button>
            <button onClick={() => changeSlide(1)}>
              <IoArrowForwardCircleOutline size={40} />
              {/* <LuCircleArrowRight size={40}/> */}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;

