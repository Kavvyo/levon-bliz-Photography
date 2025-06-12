import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronUp } from "lucide-react";

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 1000) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    isVisible && (
      <div className="flex fixed bottom-5 right-10 z-40">
        <Button variant="outline" className="cursor-pointer border border-gray-300 shadow-2xl hover:bg-gray-300" onClick={scrollToTop}>
          <ChevronUp className="size-5 hover:text-white"/>
        </Button>
      </div>
    )
  );
}

export default BackToTop;
