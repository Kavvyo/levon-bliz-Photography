function About() {
    return ( 
        <section id="about" className="h-full ">
                <h1 className="text-center text-[3rem] max-sm:text-[2.5rem] font-serif italic">About Levon</h1>

                <div className=" flex flex-row justify-evenly max-sm:flex-col max-sm:items-center max-sm:mt-5">
                    <p className="text-xl w-120 mt-25 text-justify  max-sm:-mt-2 max-sm:w-80 max-sm:text-[1rem] font-Roboto font-light">
                        Based in the historic city of Anuradhapura, Sri Lanka, Levon Bliz is a passionate photographer dedicated to capturing 
                        life's diverse moments through his lens. With a keen eye for detail and a deep understanding of light, Levon specializes 
                        in a broad range of photography, including the heartfelt emotions of Weddings, the intimate expressions of Portraits, 
                        the vibrant energy of Events, the dynamic artistry of Fashion, the authentic stories of Street scenes, and the breathtaking 
                        beauty of Nature across Sri Lanka. Whether it's preserving a cherished memory or crafting a striking visual narrative, Levon 
                        is committed to delivering evocative and timeless images that truly reflect the unique spirit of each subject and setting.</p>

                       <div className="flex flex-col max-sm: items-center mt-8">
                            <img className=" h-80 w-100 object-cover rounded-[8px] max-sm:h-50 max-sm:w-80 hover:scale-105 hover:shadow-xl transition-transform duration-300" src="https://images.pexels.com/photos/1071816/pexels-photo-1071816.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
                            <img className="h-80 w-90 object-cover -mt-25 max-sm:h-60 max-sm:w-60 max-sm:-mt-15" src="src\assets\Signature.svg" alt="" />
                       </div>

                </div>
            <hr className=" w-[85%] h-[3px] mx-auto bg-gray-300 border-0 rounded-sm " />
        </section>
     );
}

export default About;