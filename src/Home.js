import Navbar from "./Navbar"
import About from "./About";
import Skills from "./Skills";
import Projects from "./Project";
import Contact from "./Contact";
import Education from "./Education";
import Banner from "./Banner";
function Home(){
    return(
        <>
        
            <Navbar/>
            <Banner/>
            <About/>
            <Skills/>
            <Projects/>
            <Education/>
            <Contact/>
           
        </>
    )
}

export default Home;