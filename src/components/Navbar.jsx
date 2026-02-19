import Logo from '../assets/logo.png';

function Navbar({ onBookClick }) {
    return (
        <nav className="w-full bg-[#FCFCFC] px-8 py-6 flex justify-between items-center font-sans ">
            {/* Logo Section: White pill container */}
            <section>
                <div className="flex items-center gap-2 px-10 py-3">
                    {/* Placeholder for logo icon */}
                    <img src={Logo} alt="Logo" className="w-50 h-20 object-contain rounded-full border border-gray-200" />
                </div>
            </section>

            {/* Navigation Links: White pill container */}
            <section>
                <ul className="bg-white flex items-center p-1.5 rounded-full shadow-sm text-lg">
                    {/* Active Link (Home) */}
                    <li className="bg-black text-white px-6 py-2 rounded-full cursor-pointer font-bold uppercase tracking-wider">
                        Home
                    </li>
                    {/* Inactive Links */}
                    <li className="text-black hover:text-[#01CE91] px-5 cursor-pointer font-bold transition-colors uppercase tracking-wider">
                        <a href="#about">About</a>
                    </li>
                    <li className="text-black hover:text-[#01CE91] px-5 cursor-pointer font-bold transition-colors uppercase tracking-wider">
                        <a href="#services">Services</a>
                    </li>
                    <li className="text-black hover:text-[#01CE91] px-5 cursor-pointer font-bold transition-colors uppercase tracking-wider">
                        <a href="#doctors">Our Doctors</a>
                    </li>
                    <li className="text-black hover:text-[#01CE91] px-5 cursor-pointer font-bold transition-colors uppercase tracking-wider">
                        <a href="#reviews">Reviews</a>
                    </li>
                </ul>
            </section>

            {/* Action Buttons */}
            <section className="flex gap-4 text-lg">
                <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-black shadow-sm hover:bg-gray-50 transition-colors uppercase tracking-wider border border-gray-100">
                    Log in
                </button>
                <button
                    onClick={onBookClick}
                    className="bg-[#1A1A1A] text-white px-8 py-3 rounded-full font-black shadow-xl hover:bg-black transition-all hover:-translate-y-0.5 uppercase tracking-wider"
                >
                    Book Now
                </button>
            </section>
        </nav>
    )
}

export default Navbar