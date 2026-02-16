import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Services from "../components/Services.jsx";
import Doctors from "../components/Doctors.jsx";
import Footer from "../components/Footer.jsx";
function Homepage() {
    return (
        <section>
            <Navbar />
            <HeroSection />
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <div id="doctors"><Doctors /></div>
            <Footer />
        </section>
    )
}

export default Homepage;