function Contact() {
    return ( 
        <section id="contact">
            
            <div className="flex justify-center flex-col mx-2 mt-10">
                <h1 className="text-center text-[3rem] max-sm:text-[2.5rem] font-serif italic">Let' Work Together</h1>

                <div className=" flex flex-row justify-evenly mt-5 max-sm:mx-5 max-sm:flex-col max-sm:justify-center max-sm:text-center max-sm:mt-6 max-lg:flex-col max-lg:items-center">
                    <p className="text-[1rem] font-bold  max-sm:mb-5 max-sm:text-[1rem] text-gray-500 max-lg:mt-5">• Email <br /> <span className="text-black text-xl max-sm:text-[1rem] font-medium">&#160;&#160; levonblizphoto@gmail.com</span></p>
                    <p className="text-[1rem] font-bold max-sm:mb-5 max-sm:text-[1rem] text-gray-500 max-lg:mt-5">• Call us <br /> <span className="text-black text-xl max-sm:text-[1rem] font-medium">&#160;&#160; +94-71234567 / 011-2535974</span></p>
                    <p className="text-[1rem] font-bold max-sm:text-[1rem] text-gray-500 max-lg:mt-5">• Visit <br /> <span className="text-black text-xl max-sm:text-[1rem] font-medium">&#160;&#160; 252/ stage 2/ Anuradhapura</span></p>
                </div>


                <div className="flex justify-around mt-10 max-sm:flex-col max-sm:items-center max-lg:flex-col max-lg:items-center">
                    <div className="flex flex-col ">
                        <h1 className="mb-5 text-2xl font-bold text-gray-800">Send direct message to us</h1>

                        <input className="h-9 w-[30rem] max-sm:w-[20rem] bg-[#dbdbdb5d] rounded-[5px] border border-[#9e9e9e6b] shadow px-2 outline-0" placeholder="Enter your email" type="text" />
                        <textarea className="h-60 w-[30rem] max-sm:w-[20rem] my-5 rounded-[5px] border border-[#9e9e9e6b] shadow bg-[#dbdbdb5d] pl-2 outline-0 pt-2" name="Message" placeholder="Enter your message" id=""></textarea>
                        <button className="w-25 rounded-[5px] h-8 border border-[#000000] bg-black hover:bg-transparent text-white hover:text-black cursor-pointer transition-colors
                                            ">
                            Send</button>
                    </div>
                    
                    <div>
                        <iframe className="rounded-xl border border-[#222222d5] shadow h-[400px] w-[600px] max-sm:w-[20rem] max-sm:h-[300px] max-sm:mt-10 max-lg:mt-10" 
                                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d830.1342298493341!2d80.40845113898968!3d8.32050390745435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2slk!4v1741669199729!5m2!1sen!2slk"
                                loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
            
        </section>
     );
}

export default Contact;