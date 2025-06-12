import { useEffect, useState } from "react";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import { X } from "lucide-react";
import DecryptedText from "../ui/DecryptedText";

function Gallary() {
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [emblaApi, setEmblaApi] = useState(null);

    const images = ["https://images.pexels.com/photos/4048672/pexels-photo-4048672.jpeg?auto=compress&cs=tinysrgb&w=1280&lazy=load",
                    "https://images.pexels.com/photos/8022977/pexels-photo-8022977.jpeg?auto=compress&cs=tinysrgb&w=1280&lazy=load",
                    "https://images.pexels.com/photos/30462124/pexels-photo-30462124/free-photo-of-scenic-river-valley-in-the-himalayan-mountains.jpeg?auto=compress&cs=tinysrgb&w=1280&lazy=load",
                    "https://images.pexels.com/photos/30875287/pexels-photo-30875287/free-photo-of-dreamy-portrait-of-woman-with-abstract-colors.jpeg?auto=compress&cs=tinysrgb&w=1280&lazy=load",
                    "https://images.pexels.com/photos/30615648/pexels-photo-30615648/free-photo-of-hand-touching-tall-wheat-in-sunlit-field.jpeg?auto=compress&cs=tinysrgb&w=1280&lazy=load",
                    "https://images.pexels.com/photos/30638768/pexels-photo-30638768/free-photo-of-taj-mahal-at-sunrise-iconic-indian-landmark.jpeg?auto=compress&cs=tinysrgb&w=1280&lazy=load",
                    "https://images.pexels.com/photos/30832961/pexels-photo-30832961/free-photo-of-elegant-tea-setup-with-lemons-and-mimosa-flowers.jpeg?auto=compress&cs=tinysrgb&w=1280&lazy=load",
                    "https://images.pexels.com/photos/5846133/pexels-photo-5846133.jpeg?auto=compress&cs=tinysrgb&w=1280&lazy=load",
                    "https://images.pexels.com/photos/29709105/pexels-photo-29709105/free-photo-of-frosty-winter-sheep-in-bosnia-s-picturesque-fields.jpeg?auto=compress&cs=tinysrgb&w=1280&lazy=load",
                    ];

     useEffect(() => {
    if (emblaApi && selectedImageIndex !== null) {
      emblaApi.scrollTo(selectedImageIndex);
    }
  }, [emblaApi, selectedImageIndex]);


    return ( 
        <section id="gallary" className="h-full">

            <h1 className="text-center mt-5 text-[3.5rem] max-sm:text-[3rem] max-sm:my-5 font-serif italic">Gallary</h1>
            

           <div className="gallary columns-3 gap-5 m-5 max-sm:gap-2 max-sm:m-2 max-sm:columns-2 ">
            {images.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`Gallery image ${index + 1}`}
                        loading="lazy" // Lazy loads images
                        className="rounded-lg shadow-sm transition-transform duration-300 hover:scale-105 focus:max-sm:scale-105"
                        onClick={() => setSelectedImageIndex(index)}
                    />
                ))}

           </div>

           <hr className=" w-[85%] h-[3px] mx-auto my-8 bg-gray-300 border-0 rounded-sm " />

          {selectedImageIndex !== null && (
                <div
                className="fixed inset-0 bg-[#000000e1] backdrop-blur-sm flex items-center justify-center z-50">

                    <div className="z-50 flex bg-[#ffffff15] absolute top-5 lg:right-[12rem] 
                                    rounded-full size-10 items-center justify-center border border-[#d6d6d659]">

                        <button onClick={() => setSelectedImageIndex(null)} className="cursor-pointer">
                            <X className="text-light"/>
                        </button>
                        
                    </div>

                <div className="relative w-full max-w-screen " onClick={(e) => e.stopPropagation()}>
                    <Carousel opts={{ loop: true }} className="flex items-center justify-center" setApi={setEmblaApi}>
                    <CarouselContent>
                        {images.map((image, index) => (
                        <CarouselItem key={index}>
                            <img
                            src={image}
                            alt={`image ${index + 1}`}
                            className="max-w-[95%] max-h-[90vh] rounded-lg shadow-xl object-cover mx-auto max-sm:object-contain max-sm:h-full"
                            />
                        </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className="absolute left-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer opacity-40 hover:opacity-100" />
                    <CarouselNext className="absolute right-8 top-1/2 -translate-y-1/2 z-10 cursor-pointer opacity-40 hover:opacity-100" />
                    </Carousel>
                </div>
                </div>
            )}

        </section>
     );
}

export default Gallary;