import './testimonials.css'


import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";

import { useState } from 'react';

const Testimonials = ()=>{

    const testimonal_list =[
        {
            tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            role:"Marketing Director at XYZ Corp "
        },
        {
            tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            role:"Marketing Director at XYZ Corp"
        },
        {
            tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            role:"Marketing Director at XYZ Corp"
        },
        {
            tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            role:"Marketing Director at XYZ Corp"
        },
        {
            tooltip: "We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.",
            name: "John Smith",
            role:"Marketing Director at XYZ Corp "
        }
    ]

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === testimonal_list.length - 1 ? 0 : prevIndex + 1
        );
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonal_list.length - 1 : prevIndex - 1
        );
    };



    return(
        <>
            <section className='testimonial-section'>
                <div className='testimonial-container container'>
                    <div className='testimonial-heading'>
                        <h2 className='font-h2'><mark>Testimonials</mark></h2>
                        <p>
                            Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
                        </p>
                    </div>
                    <div className='testimonials'>
                        <div className='t-track' style={{ transform: `translateX(-${currentIndex * 40}%)` }}> 
                        {
                            testimonal_list.map((item, index)=>(
                                <div className='t-slide' key={index}>
                                    <div className="tooltip"> {item.tooltip} </div>
                                    <div className='person'>
                                        <h4 className='font-p'>{item.name}</h4>
                                        <p>{item.role}</p>                                                
                                    </div>
                                    <p className={index === currentIndex ? "slide_no active" : "slide_no"}>{index +1}</p>
                                </div>  
                            ))    
                        }
                        </div>

                        <div className='indicators'>
                            
                            <FaArrowLeft color='#F3F3F3' size={40} style={{ cursor:'pointer'}} onClick={handlePrev}/>
                            
                            <div className="dots">
                                {testimonal_list.map((_, index) => (
                                    <button 
                                        key={index} 
                                        className={index === currentIndex ? "dot active" : "dot"}
                                        onClick={() => setCurrentIndex(index)}
                                    />
                                ))}
                            </div>
                            
                            <FaArrowRight color='#F3F3F3' size={40} style={{ cursor:'pointer'}} onClick={handleNext}/>
                        
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;




// import './testimonials.css'

// import { BsArrowRightCircleFill } from "react-icons/bs";
// import { BsArrowLeftCircleFill } from "react-icons/bs";
// import { useEffect, useRef } from 'react';

// const Testimonials = ()=>{

//     const carouselRef = useRef(null);

//     useEffect(() => {
//         const track = document.querySelector(".t-track");
//         const slides = document.querySelectorAll(".t-slide");

//         if (!track || slides.length === 0) {
//             console.error("Carousel elements not found");
//             return;
//         }

//         const slideWidth = slides[0].offsetWidth + 50; // Slide width + gap
//         let index = 0;

//         function moveCarousel() {
//             index++;
//             track.style.transform = `translateX(-${slideWidth}px)`;

//             setTimeout(() => {
//                 track.appendChild(track.firstElementChild); // Move first slide to end
//                 track.style.transition = "none"; // Disable transition for instant reset
//                 track.style.transform = "translateX(0)"; // Reset position
//                 setTimeout(() => track.style.transition = "transform 0.5s linear", 50); // Re-enable transition
//             }, 500);
//         }

//         // Auto-scroll every 3 seconds
//         const interval = setInterval(moveCarousel, 3000);

//         return () => clearInterval(interval); // Cleanup on unmount
//     }, []); // Runs once after initial render


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


//     return(
//         <>
//             <section className='testimonal-container'>
//                 <div className='testimonial-heading'>
//                     <h2 className='font-h2'><mark>Testimonials</mark></h2>
//                     <p>
//                         Hear from Our Satisfied Clients: Read Our Testimonials to Learn More about Our Digital Marketing Services
//                     </p>
//                 </div>
//                 <div className='testimonials'>
//                         <div className='testimonial-inner'>
//                                 <div className='t-track' ref={carouselRef}> 
//                                 {
//                                     testimonal_list.map((item, index)=>(
//                                     <div className='t-slide' key={index}>
//                                             <div className="tooltip">
//                                                 {item.tooltip}
//                                             </div>
//                                             <div className='person'>
//                                                 <h4 className='font-p'>{item.name}</h4>
//                                                 <p>{item.role}</p>
//                                             </div>
//                                     </div>  
//                                     ))    
//                                 }
//                                 </div>

//                                 <div className='indicators'>
//                                     <BsArrowLeftCircleFill size={50} style={{ fill:'#F3F3F3', cursor:'pointer'}}/>
                                    
//                                     <BsArrowRightCircleFill size={50} style={{fill:'#F3F3F3', cursor:'pointer'}}/>
//                                 </div>
//                         </div>
//                 </div>
//             </section>
//         </>
//     );
// }

// export default Testimonials;

