"use client"
import React, { useState, useEffect } from "react";
import { FaAngleUp } from "react-icons/fa";

const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <div className="relative">
        {showTopBtn && (
          <FaAngleUp
            className="fixed bottom-0 right-0 m-4 z-20 bg-white border-4 border-darkYellow rounded-full h-12 w-12 flex items-center justify-center cursor-pointer animate-movebtn duration-300 hover:bg-white hover:text-purple-900 hover:border-purple-900"
            onClick={goToTop}
          />
        )}
      </div>
    );
};
export default ScrollToTop;