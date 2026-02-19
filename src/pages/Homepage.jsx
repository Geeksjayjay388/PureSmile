import React, { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import HeroSection from "../components/HeroSection.jsx";
import About from "../components/About.jsx";
import Services from "../components/Services.jsx";
import Doctors from "../components/Doctors.jsx";
import Footer from "../components/Footer.jsx";
import ReviewsSection from "../components/ReviewSection.jsx";
import BookingModal from "../components/BookingModal.jsx";
import CTASection from "../components/CTASection.jsx";

function Homepage() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);

    return (
        <section>
            <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
            <Navbar onBookClick={openModal} />
            <HeroSection onBookClick={openModal} />
            <div id="about"><About /></div>
            <div id="services"><Services /></div>
            <div id="doctors"><Doctors /></div>
            <div id="reviews"><ReviewsSection /></div>

            <div id="cta"><CTASection onBookClick={openModal} /></div>
            <Footer />
        </section>
    )
}

export default Homepage;