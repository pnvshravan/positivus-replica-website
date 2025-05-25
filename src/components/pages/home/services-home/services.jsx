import './services.css'
// import labels_icon from '/src/assets/labels.svg';

const Services = ()=>{

    const service_list =[
        {
            heading: "Search engine optimization",
            card_class_name:"seo-em-style",
            image_class_name: "seo"
        },
        {
            heading: "Pay-per-click advertising",
            card_class_name:"ppca-cc-style",
            image_class_name: "ppca"
        },
        {
            heading: "Social Media Marketing",
            card_class_name:"smm-at-style",
            image_class_name: "smm"
        },
        {
            heading: "Email Marketing",
            card_class_name:"seo-em-style",
            image_class_name: "em"
        },
        {
            heading: "Content Creation",
            card_class_name:"ppca-cc-style",
            image_class_name: "cc"
        },
        {
            heading: "Analytics and Tracking",
            card_class_name:"smm-at-style",
            image_class_name: "at"
        }
    ]

    return(
        <>
            <section className="service-container">
                <div className="services container">
                    <div className="service-heading">
                        <h2 className="font-h2">
                            <mark>Services</mark>
                        </h2>
                        <p className="font-p">
                            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:   
                        </p>
                    </div>
                    <div className='services-list'>
                        {
                            service_list.map((item, index)=>(
                                <div className={`services-card ${item.card_class_name}`} key={index}>
                                    <div className='services-card-left'>
                                        <h3 className='font-h3'><mark>{item.heading}</mark></h3>
                                        <a href="#"><span className='arrow'></span><span className='arrow-text'> Learn more</span></a>
                                    </div>
                                    <div className={`service_img ${item.image_class_name} `}></div>
                                </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}

export default Services;