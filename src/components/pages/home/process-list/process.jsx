import { useState } from 'react';
import './process.css';

const Process = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const process_list = [
        {
            process_name: 'Consultation',
            desc: 'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'
        },
        {
            process_name: 'Research and Strategy Development',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptas commodi ad est laboriosam porro, reprehenderit id non beatae distinctio eos illo ipsum maiores dolore labore molestiae quae, libero inventore.'
        },
        {
            process_name: 'Implementation',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptas commodi ad est laboriosam porro, reprehenderit id non beatae distinctio eos illo ipsum maiores dolore labore molestiae quae, libero inventore.'
        },
        {
            process_name: 'Monitoring and Optimization',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptas commodi ad est laboriosam porro, reprehenderit id non beatae distinctio eos illo ipsum maiores dolore labore molestiae quae, libero inventore.'
        },
        {
            process_name: 'Reporting and Communication',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptas commodi ad est laboriosam porro, reprehenderit id non beatae distinctio eos illo ipsum maiores dolore labore molestiae quae, libero inventore.'
        },
        {
            process_name: 'Continual Improvement',
            desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum voluptas commodi ad est laboriosam porro, reprehenderit id non beatae distinctio eos illo ipsum maiores dolore labore molestiae quae, libero inventore.'
        }
    ];

    const toggleActive = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="process-section">
            <div className='processes container'>
                <div className='process-heading'>
                    <h2 className='font-h2'>
                        <mark>Our Working Process</mark>
                    </h2>
                    <p className='font-p'>
                        Step-by-Step Guide to Achieving Your Business Goals
                    </p>
                </div>
                <div className='process-list'>
                    {process_list.map((item, index) => (
                        <div
                            className={`process-card container ${activeIndex === index ? 'active' : ''}`}
                            onClick={() => toggleActive(index)}
                            key={index}
                        >
                            <div className='process-card-content'>
                                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '1.25rem' }}>
                                    <h1 className='font-h1'>{`0${index + 1}`}</h1>
                                    <h3 className='font-h3'>{item.process_name}</h3>
                                </div>
                                <div>
                                    {activeIndex === index ? (
                                        <div className='minus'></div>
                                    ) : (
                                        <div className='plus'></div>
                                    )}
                                </div>
                            </div>
                            {activeIndex === index && (
                                <div className={`process-expanded active`}>
                                    <hr />
                                    <div className='desc'>{item.desc}</div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;

