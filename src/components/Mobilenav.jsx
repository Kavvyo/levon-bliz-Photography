function Mobilenav({menuOpen, setMenuOpen}) {
    return ( 
        <div onClick={() => setMenuOpen(false)} className={`fixed flex bg-[#111111cb] top-0 w-full z-40 flex-col items-center justify-center transition-all duration-100 ease-in-out
                        backdrop-blur-[2px]
                        ${menuOpen ? "h-screen opacity-100 pointer-events-auto" : "h-0 opacity-0 pointer-events-none"}
            
            
            `}>


            <button onClick={() => setMenuOpen(false)} className=" text-[3.5rem] absolute right-5 -top-2.5 text-white focus:outline-none cursor-pointer">
                &times;
            </button>

            
            <div className="flex flex-col text-white text-[1.5rem]">
                <a href="#home" onClick={() => setMenuOpen(false)} className="pb-20" >Home</a>
                <a href="#gallary" onClick={() => setMenuOpen(false)} className="pb-20">Gallery</a>
                <a href="#about" onClick={() => setMenuOpen(false)} className="pb-20">About</a>
                <a href="#contact" onClick={() => setMenuOpen(false)} className="pb-20">Contact</a>
               
                
            </div>
        </div>
     );
}

export default Mobilenav;