import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";

function Footer() {
    return ( 
        <footer className="bg-[#202020] mt-10 rounded-t-4xl overflow-y-hidden">
            
            <div className="flex items-center justify-around max-sm:flex-col py-10">
                
                <div className="flex flex-col justify-center text-[0.9rem] text-light  max-sm:text-sm">
                    <span className="text-2xl font-serif pb-2 max-sm:text-xl">Navigate</span>
                    <a href="#home" >Home</a>
                    <a href="#gallary">Gallery</a>
                    <a href="#about">About</a>
                </div>

                <div className="flex flex-col items-center ">
                    <img src="/logoWhite.png" alt="logo" className="h-[10rem] w-[10rem] object-cover max-sm:h-[8rem] max-sm:w-[8rem]" />

                    <span className="text-xl font-serif italic text-white">Defines Art, Levon Bliz Photography</span>
                    <span className="text-sm text-white text-center">Anuradhapura • Colombo • Kurunagla</span>
                </div>

                <div className="flex flex-col text-white pt-5">
                    <span className="text-xl font-serif italic pb-2 text-center">Follow us <br/> on social media</span>

                    <hr className=" w-[80%] h-[3px] mx-auto bg-gray-300 border-0 rounded-sm mb-5 " />

                    <div className="flex gap-5 justify-center">
                        <a rel="stylesheet" href="https://www.instagram.com">
                            <Instagram />
                        </a>
                        <a rel="stylesheet" href="https://www.x.com">
                            <Twitter />

                        </a>
                        <a rel="stylesheet" href="https://www.facebook.com">
                            <Facebook />
                        </a>
                        <a rel="stylesheet" href="https://www.youtube.com">
                            <Youtube />
                        </a>
                        
                    </div>

                    <hr className=" w-[80%] h-[3px] mx-auto bg-gray-300 border-0 rounded-sm mt-5 " />
                </div>

            </div>

            <div className="flex justify-center">
                <span className="text-xs text-center  text-gray-300 ">© 2025 Levon bliz Photogrphy Created with Kavyo Dilrex</span>
            </div>
            
        </footer>
     );
}

export default Footer;