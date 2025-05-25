import './contact-form.css';
import cfImage from '/src/assets/contact-form.png';

const ContactForm = () =>{
    return(
        <>
            <section className='contact-form-section'>
                <div className='contact-form-container container'>
                    <div className='contact-heading'>
                        <h2 className='font-h2'>
                            <mark>Contact Us</mark>
                        </h2>
                        <p className='font-p'>
                            Connect with Us: Let's Discuss Your Digital Marketing Needs
                        </p>
                    </div>
                    <div className='contact-form'>
                        <div className='cf-left font-p'>
                            <form className='cont-form'>
                                <div className='radios'>
                                    <span>
                                        <input type="radio" name="contact" id="contactChoice1"/> 
                                        <label htmlFor="contactChoice1">Say Hi</label>
                                    </span>
                                    <span>
                                        <input type="radio" name="contact" id="contactChoice2"/> 
                                        <label htmlFor="contactChoice1">Get a Quote</label>
                                    </span>
                                </div>
                                <div className='contact-inputs'>
                                    <span>
                                        <label htmlFor="nameInput">Name</label>
                                        <input type="text" name="name" placeholder='Name' id="nameInput"/>
                                    </span>
                                    <span>
                                        <label htmlFor="nameInput">Email*</label>
                                        <input type="text" name="email" placeholder='Email' id="nameInput"/>
                                    </span>
                                    <span>
                                        <label htmlFor="nameInput">Message*</label>
                                        <textarea type="text" name="message" placeholder='Message' id="nameInput"/>
                                    </span>  
                                </div>
                                <button type="submit" className='form-submit'>Send Message</button>
                            </form> 
                        </div>
                        <div className='cf-right'>
                            <img src={cfImage} className='contact-img' alt="illustration"/>
                        </div>
                    </div> 
                </div>
            </section>
        </>
    );
}

export default ContactForm;