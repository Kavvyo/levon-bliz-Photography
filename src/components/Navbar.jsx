import { useState, useEffect } from "react";
import TextPressure from "./ui/TextPressure";

function Navbar({ menuOpen, setMenuOpen }) {
    const [showNavbar, setShowNavbar] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                setShowNavbar(false);
            } else {
                setShowNavbar(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);

    return (
        <nav className={`fixed top-0 w-full z-40 transition-transform duration-300 bg-light ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
            <div className="mx-10 text-dark">
                <div className="flex items-center h-14 justify-between max-sm:hidden 2xl:text-2xl text-[1.2rem] relative">

                    <a href="#home">
                            <img src="src/assets/logo.png" alt="logo" height="80px" width="80px" />
                    </a>

                    <div className="flex justify-center items-center gap-8 mr-10 font-bold font-Roboto">
                        {/* <a href="#home" className="navlinks">Home</a> */}
                        <a href="#gallary" className="navlinks">
                             <TextPressure
                                text="Gallery"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#161616"
                                strokeColor="#ff0000"
                                minFontSize={20}
                                className="select-none py-5"
                            />


                        </a>

                        <a href="#about" className="navlinks">
                            <TextPressure
                                text="About"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#161616"
                                strokeColor="#ff0000"
                                minFontSize={20}
                                className="select-none py-5"
                            />
                        </a>

                        <a href="#contact" className="navlinks">

                            <TextPressure
                                text="Contacat"
                                flex={true}
                                alpha={false}
                                stroke={false}
                                width={true}
                                weight={true}
                                italic={true}
                                textColor="#161616"
                                strokeColor="#ff0000"
                                minFontSize={20}
                                className="select-none py-5"
                            />
                        </a>

                    </div>
                </div>

                <div className={`flex items-center h-14 sm:hidden px-2 justify-between font-bold text-2xl`}>
                    <a href="#home">
                        <img src="src/assets/logo.png" alt="logo" height="85px" width="85px" />
                    </a>
                    <span onClick={() => setMenuOpen((prev) => !prev)} className={`${menuOpen ? "hidden" : "flex"} text-[1.5rem]`}>&#9776;</span>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
