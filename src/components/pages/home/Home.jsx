
import CaseStudy from "./case-study/case-study";
import ContactForm from "./contact-form/contact-form";
import Hero from "./hero/hero";
import Process from "./process-list/process";
import Services from "./services-home/services";
import Team from "./team-list/team";
import Testimonials from "./testimonials/testimonials";

export const Home=() =>{

    return(
        <>
            <Hero/>
            <Services/>
            <CaseStudy/>
            <Process/>
            <Team/>
            {/* <Testimonials/> */}
            <ContactForm/>
        </>
    );
}


