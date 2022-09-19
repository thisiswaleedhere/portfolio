import React from "react";
import { ReactComponent as LogoMW } from "../images/LOGOMW.svg";



const Title = () => {
    return (
        <div className="relative max-w-8xl min-w-[350px] z-10">

            <div>

                <LogoMW className="w-6 sm:w-10 pt-6 md:pt-8 xl:pt-12 fill-white animate-fade-in-down mx-auto" />

            </div>


            <h1 className="pt-6 md:pt-10 xl:pt-12 text-3xl sm:text-5xl md:text-6xl lg:text-7xl text-gray-300 text-center uppercase font-quicksand tracking-widest sm:tracking-[.16em] animate-fade-in-down transition-all delay-[2000ms]">mohamed waleed</h1>

            <div className="pt-2 text-base sm:text-xl md:text-2xl lg:text-3xl text-center text-gray-400 font-quicksand tracking-widest flex-col sm:flex sm:flex-row justify-center animate-fade-in-down delay-[2000ms]">
                <div>FRONTEND DEVELOPER</div>
                <div className="flex justify-center">
                    <div className="text-green-300 px-3 sm:pt-1 text-base md:text-xl lg:text-2xl font-caveat">and does a bit of</div>
                    <div>DESIGNING</div>
                </div>
            </div>


        </div>
    )
}

export default Title;