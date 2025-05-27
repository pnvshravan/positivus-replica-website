// import './testimonials.css';

// import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

// import { useState } from 'react';

// const Testimonials = ()=>{

//     const testimonal_list =[
//         {
//             tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
//             name: "John Smith",
//             role:"Marketing Director at XYZ Corp "
//         },
//         {
//             tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
//             name: "John Smith",
//             role:"Marketing Director at XYZ Corp"
//         },
//         {
//             tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
//             name: "John Smith",
//             role:"Marketing Director at XYZ Corp"
//         },
//         {
//             tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
//             name: "John Smith",
//             role:"Marketing Director at XYZ Corp"
//         },
//         {
//             tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
//             name: "John Smith",
//             role:"Marketing Director at XYZ Corp "
//         }
//     ]

//     const [currentIndex, setCurrentIndex] = useState(0);

//     const handleNext = () => {
//         setCurrentIndex((prevIndex) => 
//             prevIndex === testimonal_list.length - 1 ? 0 : prevIndex + 1
//         );
//     };

//     const handlePrev = () => {
//         setCurrentIndex((prevIndex) =>
//             prevIndex === 0 ? testimonal_list.length - 1 : prevIndex - 1
//         );
//     };



//     return(
//         <>
//             <section className='testimonial-section'>
//                 {/* {container class is not used this section, as the css rules are adjusted for it already} */}
//                 <div className='testimonial-container container'> 
//                     <div className='testimonial-heading'>
//                         <h2 className='font-h2'><mark>Testimonials</mark></h2>
//                         <p>
//                             Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
//                         </p>
//                     </div>
//                     <div className='testimonials'>
//                         <div className='t-track' style={{ transform: `translateX(-${currentIndex * 100}%)` }}> 
//                         {
//                             testimonal_list.map((item, index)=>(
//                                 <div className='t-slide' key={index}>
//                                     <div className="tooltip"> {item.tooltip} </div>
//                                     <div className='person'>
//                                         <h4 className='font-p'>{item.name}</h4>
//                                         <p>{item.role}</p>                                                
//                                     </div>
//                                     <p className={index === currentIndex ? "slide_no active" : "slide_no"}>{index +1}</p>
//                                 </div>  
//                             ))    
//                         }
//                         </div>

//                         <div className='indicators'>
                            
//                             <FaArrowLeft color='#F3F3F3' 
//                             size={40} 
//                             style={{ cursor:'pointer'} } 
//                             onClick={handlePrev}
//                             className='arrow-left'/>
                            
//                             <div className="dots">
//                                 {testimonal_list.map((_, index) => (
//                                     <button 
//                                         key={index} 
//                                         className={index === currentIndex ? "dot active" : "dot"}
//                                         onClick={() => setCurrentIndex(index)}
//                                     />
//                                 ))}
//                             </div>
                            
//                             <FaArrowRight color='#F3F3F3' 
//                             size={40} 
//                             style={{ cursor:'pointer'}} 
//                             onClick={handleNext}
//                             className='arrow-right'/>
                        
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Testimonials;


import React, { useState } from 'react';
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

const Testimonials = () => {
    const testimonial_list = [
        {
            tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            role: "Marketing Director at XYZ Corp"
        },
        {
            tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "Jane Doe",
            role: "CEO at ABC Company"
        },
        {
            tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "Mike Johnson",
            role: "Digital Marketing Manager"
        },
        {
            tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "Sarah Wilson",
            role: "Brand Director"
        },
        {
            tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "David Brown",
            role: "Growth Manager"
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonial_list.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonial_list.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="testimonial-section">
                            <div className="testimonial-container container">
                <div className="testimonial-heading">
                    <h2>Testimonials</h2>
                    <p>Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services</p>
                </div>
                
                <div className="testimonials">
                    <div 
                        className="t-track" 
                        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                    >
                        {testimonial_list.map((item, index) => (
                            <div key={index} className="t-slide">
                                <div className="tooltip">
                                    <p>{item.tooltip}</p>
                                </div>
                                
                                <div className="person">
                                    <h4>{item.name}</h4>
                                    <p>{item.role}</p>
                                </div>
                                
                                <div className="slide_no">
                                    {index + 1}
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="indicators">
                        <button className="nav-btn" onClick={handlePrev} aria-label="Previous testimonial">
                            <FaArrowLeft />
                        </button>
                        
                        <div className="dots-container">
                            {testimonial_list.map((_, index) => (
                                <button
                                    key={index}
                                    className={`dot ${index === currentIndex ? 'active' : ''}`}
                                    onClick={() => setCurrentIndex(index)}
                                    aria-label={`Go to testimonial ${index + 1}`}
                                />
                            ))}
                        </div>
                        
                        <button className="nav-btn" onClick={handleNext} aria-label="Next testimonial">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
            </div>
            
            <style jsx>{`
               

                /* RESPONSIVE CHANGES - Main container */
                .testimonial-section {
                    margin-top: clamp(3rem, 8vw, 6.25rem);
                    /* Removed padding since .container class handles the responsive widths and margins */
                }

                .testimonial-container {
                    display: flex;
                    flex-direction: column;
                    gap: clamp(2rem, 5vw, 3.62rem);
                    /* Removed max-width and margin auto since .container handles this */
                }

                /* RESPONSIVE CHANGES - Heading */
                .testimonial-heading {
                    display: flex;
                    flex-direction: column;
                    gap: clamp(1rem, 3vw, 2.5rem);
                    text-align: center;
                    /* CHANGE: Removed fixed width, added flex-direction column for mobile */
                }

                .testimonial-heading h2 {
                    font-size: clamp(1.5rem, 4vw, 2.5rem);
                    color: var(--clr-primary);
                    margin: 0;
                }

                .testimonial-heading p {
                    font-size: clamp(0.875rem, 2.5vw, 1.125rem);
                    color: var(--clr-tertiary);
                    margin: 0;
                    max-width: 600px;
                    margin: 0 auto;
                }

                /* RESPONSIVE CHANGES - Main testimonials container */
                .testimonials {
                    overflow: hidden;
                    position: relative;
                    background-color: var(--clr-secondary);
                    border-radius: clamp(20px, 5vw, 45px);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: clamp(2rem, 6vw, 4.75rem);
                    padding: clamp(2rem, 6vw, 5.25rem) clamp(1rem, 3vw, 2rem) clamp(2rem, 5vw, 4rem);
                    /* CHANGE: Added responsive padding and border-radius */
                }

                /* RESPONSIVE CHANGES - Track and slides */
                .t-track {
                    display: flex;
                    width: 100%;
                    transition: transform 0.5s ease-in-out;
                    /* CHANGE: Removed fixed padding, handled by container */
                }

                .t-slide {
                    min-width: 100%;
                    // flex-shrink: 0;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    text-align: center;
                    padding: 0 clamp(0.5rem, 2vw, 1rem);
                    /* CHANGE: Added responsive padding and centering */
                }

                /* RESPONSIVE CHANGES - Tooltip */
                .tooltip {
                    color: #fff;
                    max-width: clamp(300px, 90vw, 600px);
                    text-align: center;
                    min-height: clamp(200px, 25vw, 240px);
                    /* CHANGE: Made max-width responsive, changed height to min-height */
                    
                    --a: 90deg;
                    --h: clamp(1rem, 2vw, 1.5rem);
                    --p: 14%;
                    --r: clamp(25px, 5vw, 45px);
                    --b: 2px;
                    --c1: #B9FF66;
                    --c2: #191A23;

                    padding: clamp(1.5rem, 4vw, 2.5rem);
                    /* CHANGE: Made padding responsive */
                    border-radius: var(--r) var(--r) min(var(--r),100% - var(--p) - var(--h)*tan(var(--a)/2)) min(var(--r),var(--p) - var(--h)*tan(var(--a)/2))/var(--r);
                    clip-path: polygon(0 100%,0 0,100% 0,100% 100%,
                        min(100%,var(--p) + var(--h)*tan(var(--a)/2)) 100%,
                        var(--p) calc(100% + var(--h)),
                        max(0%  ,var(--p) - var(--h)*tan(var(--a)/2)) 100%);
                    background: var(--c1);
                    border-image: conic-gradient(var(--c1) 0 0) fill 0/
                        var(--r) max(0%,100% - var(--p) - var(--h)*tan(var(--a)/2)) 0 max(0%,var(--p) - var(--h)*tan(var(--a)/2))/0 0 var(--h) 0;
                    position: relative;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .tooltip:before {
                    content: "";
                    position: absolute;
                    z-index: -1;
                    inset: 0;
                    padding: var(--b);
                    border-radius: inherit;
                    clip-path: polygon(0 100%,0 0,100% 0,100% 100%,
                        min(100% - var(--b),var(--p) + var(--h)*tan(var(--a)/2) - var(--b)*tan(45deg - var(--a)/4)) calc(100% - var(--b)),
                        var(--p) calc(100% + var(--h) - var(--b)/sin(var(--a)/2)),
                        max(var(--b),var(--p) - var(--h)*tan(var(--a)/2) + var(--b)*tan(45deg - var(--a)/4)) calc(100% - var(--b)));
                    background: var(--c2) content-box;
                    border-image: conic-gradient(var(--c2) 0 0) fill 0/
                        var(--r) max(var(--b),100% - var(--p) - var(--h)*tan(var(--a)/2)) 0 max(var(--b),var(--p) - var(--h)*tan(var(--a)/2))/0 0 var(--h) 0;
                }

                .tooltip p {
                    font-size: clamp(0.875rem, 2.5vw, 1.125rem);
                    line-height: 1.6;
                    margin: 0;
                    text-wrap: wrap;
                    /* CHANGE: Made font-size responsive */
                }

                /* RESPONSIVE CHANGES - Person info */
                .person {
                    margin-top: clamp(1.5rem, 4vw, 2.5rem);
                    text-align: center;
                    /* CHANGE: Removed fixed left margin, centered text */
                }

                .person h4 {
                    color: var(--clr-accent);
                    font-size: clamp(1rem, 2.5vw, 1.25rem);
                    margin: 0 0 0.5rem 0;
                    /* CHANGE: Made font-size responsive */
                }

                .person p {
                    color: var(--clr-tertiary);
                    font-size: clamp(0.875rem, 2vw, 1rem);
                    margin: 0;
                    /* CHANGE: Made font-size responsive */
                }

                /* RESPONSIVE CHANGES - Slide number */
                .slide_no {
                    color: var(--clr-tertiary);
                    background-color: #343434;
                    padding: clamp(8px, 2vw, 10px) clamp(12px, 3vw, 16px);
                    border: 2px solid var(--clr-accent);
                    border-radius: clamp(20px, 5vw, 45px);
                    font-size: clamp(0.875rem, 2vw, 1.125rem);
                    margin-top: clamp(1rem, 3vw, 1.5rem);
                    /* CHANGE: Made padding, border-radius, and font-size responsive */
                }

                .slide_no.active {
                    background-color: var(--clr-accent);
                    color: var(--clr-secondary);
                    font-weight: 700;
                }

                /* RESPONSIVE CHANGES - Indicators */
                .indicators {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: clamp(2rem, 8vw, 10.625rem);
                    width: 100%;
                    flex-wrap: wrap;
                    /* CHANGE: Made gap responsive, added flex-wrap */
                }


                .dots-container {
                    display: flex;
                    gap: clamp(0.5rem, 2vw, 1rem);
                    align-items: center;
                    /* CHANGE: Made gap responsive */
                }

                .dot {
                    width: clamp(20px, 4vw, 30px);
                    height: clamp(20px, 4vw, 30px);
                    background-color: #fff;
                    clip-path: polygon(50% 15%, 100% 0, 85% 50%, 100% 100%, 50% 85%, 0 100%, 15% 50%, 0 0);
                    border: none;
                    cursor: pointer;
                    transition: all 0.3s ease;
                    /* CHANGE: Made size responsive */
                }

                .dot.active {
                    background: #B9FF66;
                    transform: scale(1.2);
                }

                .dot:hover {
                    transform: scale(1.1);
                }

                /* RESPONSIVE BREAKPOINTS - Adjusted to work with .container class */
                @media (max-width: 768px) {
                    .testimonial-heading {
                        text-align: center;
                    }
                    
                    .indicators {
                        gap: clamp(1rem, 4vw, 2rem);
                    }
                    
                    .tooltip {
                        --h: 1rem;
                        --r: 25px;
                    }
                }

                @media (max-width: 480px) {
                    .testimonials {
                        border-radius: 20px;
                        padding: 2rem 1rem;
                    }
                    
                    .indicators {
                        flex-direction: column;
                        gap: 1.5rem;
                    }
                    
                    .dots-container {
                        order: -1;
                    }
                }
            `}</style>
        </div>
    );
};

export default Testimonials;