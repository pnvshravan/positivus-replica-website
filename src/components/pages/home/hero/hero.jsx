import './hero.css'
import heroImg from '/src/assets/hero-img.svg';

const Hero =()=>{
    return(
        <>
            <section className='hero-container'>
                <div className='hero-section container'>
                    <div className='hero-left'>
                        <h1 className='font-h1'>
                            Navigating the digital landscape for success
                        </h1>
                        <p className='font-p'>
                            Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation.
                        </p>
                        <a href='/coming_soon'><button>Book a consultation</button></a>
                    </div>
                    <div className='hero-right'>
                        <img src={heroImg} />
                    </div>
                </div>
            </section>
        </>
    );
}
export default Hero;
