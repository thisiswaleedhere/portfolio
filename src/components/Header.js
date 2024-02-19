import React from "react";



const Header = ({ setScroll }) => {

    const handleClick = (num) => { setScroll(num); }

    return (
        <header className="relative text-gray-200 font-quicksand px-10 sm:px-16 md:px-28 pt-8 xl:pt-6 pb-16 sm:pb-24 md:pb-32 mx-auto mt-12 flex-col justify-around max-w-9xl min-w-[350px] z-10">


            {/* <div className="flex-col justify-center xl:justify-between xl:flex xl:flex-row-reverse xl:py-12"> */}


            {/* <img src={MyHero} alt="Hero" className="relative h-36 sm:h-60 xl:h-72 mx-auto my-auto z-10" /> */}



            <div className="my-auto z-10 xl:pr-8">

                {/* <h2 className="z-10 py-6 text-lg sm:text-2xl md:text-2xl mx-auto text-center xl:text-right sm:leading-relaxed md:leading-relaxed font-light max-w-2xl">
                    I'm a self taught developer who loves building beautiful user interfaces, web applications and everything in between.  flex-col sm:flex sm:flex-row sm:flex-wrap 
                </h2> */}

                <div className="pt-2 text-base sm:text-xl md:text-2xl lg:text-7xl text-center text-gray-200 font-quicksand tracking-widest  justify-center animate-fade-in-down delay-[2000ms]">

                    <div className="text-green-300 px-3 sm:pt-1 text-base md:text-xl lg:text-4xl font-caveat">I'm a</div>
                    <p>PRODUCT DEVELOPER,</p> <div className="pt-2"> FRONTEND SYSTEMS ENGINEER</div>
                    <div className="text-green-300 px-3 sm:pt-1 text-base md:text-xl lg:text-4xl font-caveat">and I also do a bit of</div>
                    <div className="pt-2">DESIGNING</div>

                </div>


                <div className="md:my-6 sm:mt-3 md:mt-16 text-xl sm:text-2xl md:text-3xl flex justify-center">

                    <button className="bg-transparent h-10 w-32 sm:w-[136px] md:w-40 md:h-14 px-4 md:py-2 shadow-xl border-2 transition ease-in-out hover:scale-110 border-green-300 hover:bg-green-300 text-green-300 hover:text-black"
                        onClick={() => handleClick(1)}  >
                        <div className="font-caveat">Projects</div>
                    </button>

                    <button className="bg-transparent h-10 w-32 sm:w-[136px] md:w-40 md:h-14 px-4 md:py-2 shadow-xl border-2 transition ease-in-out hover:scale-110 border-green-300 hover:bg-green-300 text-green-300 hover:text-black"
                        onClick={() => handleClick(2)}  >
                        <div className="font-caveat">Expertise</div>
                    </button>

                    <button className="bg-transparent h-10 w-32 sm:w-[136px] md:w-40 md:h-14 px-4 md:py-2 shadow-xl border-2 transition ease-in-out hover:scale-110 border-green-300 hover:bg-green-300 text-green-300 hover:text-black"
                        onClick={() => handleClick(3)}  >
                        <div className="font-caveat">Get in touch</div>
                    </button>

                </div>

                {/* </div> */}



            </div>






        </header >
    )
}

export default Header;