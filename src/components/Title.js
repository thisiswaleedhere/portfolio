import React from "react";
import { ReactComponent as LogoMW } from "../images/LOGOMW.svg";



const Title = () => {
    return (
        <div className="relative max-w-8xl min-w-[350px] z-10">

            <div className="flex mx-auto justify-center">

                {/* <LogoMW className="w-6 sm:w-10 pt-6 md:pt-8 xl:pt-12 fill-[#6e9f6f8a] animate-fade-in-down" /> */}
                <h1 className="pt-6 md:pt-10 xl:pt-12 text-3xl sm:text-5xl md:text-6xl lg:text-4xl text-gray-500 hover:text-yellow-500 text-center uppercase font-caveat tracking-widest sm:tracking-[.16em] ">mohamed waleed</h1>

            </div>



            {/* <div className="pt-2 text-base sm:text-xl md:text-2xl lg:text-3xl text-center text-gray-400 font-quicksand tracking-widest flex-col sm:flex sm:flex-row sm:flex-wrap justify-center animate-fade-in-down delay-[2000ms]">
                <div>PRODUCT / FRONTEND SYSTEMS DEVELOPER</div>
                <div className="flex justify-center">
                    <div className="text-green-300 px-3 sm:pt-1 text-base md:text-xl lg:text-2xl font-caveat">and also does a bit of</div>
                    <div>DESIGNING</div>
                </div>
            </div> */}


        </div>
    )
}

export default Title;