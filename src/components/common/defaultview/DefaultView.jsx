import Footer from "../footer/footer";
import NavBar from "../navbar/navbar";

export const DefaultView =({children})=>{
    return(
        <>
            <NavBar/>
            {children}
            <Footer/>
        </>
    );
}