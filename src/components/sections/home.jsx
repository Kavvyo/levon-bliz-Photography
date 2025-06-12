import Button from "../Button";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import TextPressure from "../ui/TextPressure";
import RotatingText from "../ui/RotatingText";
import { ChevronDown } from "lucide-react";

function Home() {

    const slides = ["https://images.pexels.com/photos/20277516/pexels-photo-20277516/free-photo-of-a-woman-with-veil-covering-her-face.jpeg",
                    "https://images.pexels.com/photos/9317184/pexels-photo-9317184.jpeg",
                    "https://images.pexels.com/photos/13683679/pexels-photo-13683679.jpeg",
                    "https://images.pexels.com/photos/7529905/pexels-photo-7529905.jpeg",
                    "https://images.pexels.com/photos/8177695/pexels-photo-8177695.jpeg",
                    "https://images.pexels.com/photos/19223499/pexels-photo-19223499/free-photo-of-women-dancing-in-red-light.jpeg"
    ];

    const autoplayPlugin = Autoplay({ delay: 5000, stopOnInteraction: false })


    return ( 
        <section id="home" className="min-h-screen w-screen relative flex items-center justify-center overflow-hidden">

            <div class="h-[45%] w-full bg-linear-to-t from-black from-10% to-transparent z-15 absolute bottom-0 left-0 opacity-60"></div>

           <Carousel plugins={[autoplayPlugin]}
            opts={{ loop: true }}
            className="relative w-full h-screen"
            >
            <CarouselContent className="w-full h-full">
                {slides.map((src, index) => (
                <CarouselItem key={index} className="w-full h-full">
                    <img
                    src={src}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-screen object-cover object-[50%_25%] carouselImage"
                    />
                </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer opacity-40 hover:opacity-100" />
            <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer opacity-40 hover:opacity-100" />
            </Carousel>

            
            <div className="absolute bottom-20 flex flex-col items-center text-light font-Oswald 
            z-20 max-sm:px-4 max-sm:text-center max-sm:bottom-10">

                {/* <h1 className="text-[2.5rem] lg:hidden font-light">
                    Hello, <br/>I'm Levon Bliz
                </h1> */}

               <div className="flex flex-col leading-tight lg:hidden p-5 select-none items-center justify-center w-full">
                    <TextPressure
                        text="Hello"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#f7f4f4"
                        strokeColor="#ff0000"
                        minFontSize={20}
                        className="[text-shadow:_0px_0px_20px_#161616] text-center"
                    />
                    <TextPressure
                        text="I'm&nbsp;Levon&nbsp;Bliz"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#f7f4f4"
                        strokeColor="#ff0000"
                        minFontSize={40}
                        className="[text-shadow:_0px_0px_20px_#161616]"
                    />
                </div>


                    <TextPressure
                        text="Hello, &nbsp; I'm&nbsp;Levon&nbsp;Bliz"
                        flex={true}
                        alpha={false}
                        stroke={false}
                        width={true}
                        weight={true}
                        italic={true}
                        textColor="#f7f4f4"
                        strokeColor="#ff0000"
                        minFontSize={100}
                        className="[text-shadow:_0px_0px_20px_#161616] select-none hidden lg:flex p-5"
                    />
                
                
                {/* <p className="text-2xl max-sm:text-lg ">
                    Wedding, Portrait, Event, Fashion, Street, Nature 
                </p> */}
  
                <div className="flex justify-center items-center ">
                    <RotatingText
                        texts={['Wedding', 'Portrait', 'Event', 'Fashion', 'Street', 'Nature']}
                        mainClassName="text-black bg-light justify-center font-serif italic text-3xl bg-black px-3 max-sm:text-2xl"
                        staggerFrom={"last"}
                        initial={{ y: "100%" }}
                        animate={{ y: 0 }}
                        exit={{ y: "-120%" }}
                        staggerDuration={0.025}
                        splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 "
                        transition={{ type: "spring", damping: 30, stiffness: 400 }}
                        rotationInterval={2000}
                        />
                    <span className="text-light justify-center font-Oswald italic text-3xl max-sm:text-2xl [text-shadow:_0px_0px_20px_#161616]">Photogrpahy</span>
                </div>

                <div className="mt-5 max-sm:my-10">
                    <a href="#contact"><Button name="Contact Now"className= "backdrop-blur-[4px] " /></a>
                </div>

                

            </div>

            <div className="absolute bottom-2 max-sm:bottom-5 bg-light rounded-full size-8 z-30 flex justify-center items-center animate-bounce opacity-60">
                    <ChevronDown className="size-5 " />
            </div>

            

        </section>
     );
}

export default Home;