import React from "react";



const Header = ({ setScroll }) => {

    const handleClick = (num) => { setScroll(num); }

    return (
        <header className="relative text-gray-200 font-quicksand px-10 sm:px-16 md:px-28 pt-8 xl:pt-6 pb-16 sm:pb-24 md:pb-32 mx-auto lg:mt-12 
        flex-col justify-around max-w-9xl min-w-[350px] z-10">



            <div className="my-auto z-10 xl:pr-8">

                <div className="pt-2 text-xl sm:text-3xl lg:text-7xl text-center text-gray-200 font-quicksand tracking-widest">

                    <div className="text-green-300 px-3 sm:pt-1 text-xl sm:text-3xl lg:text-4xl font-caveat">I'm a</div>
                    <p>PRODUCT DEVELOPER,</p> <div className="pt-1 lg:pt-2"> FRONTEND SYSTEMS ENGINEER</div>
                    <div className="text-green-300 px-3 sm:pt-1 text-xl sm:text-3xl lg:text-4xl font-caveat">and I also do a bit of</div>
                    <div className="pt-1 lg:pt-2">DESIGNING</div>

                </div>


                <div className="md:my-6 mt-12 sm:mt-8 md:mt-16 text-xl sm:text-2xl md:text-3xl flex flex-col gap-2 sm:gap-4 lg:gap-0 w-32 mx-auto sm:flex-row sm:justify-center">

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
                        <div className="font-caveat">Get&nbsp;in&nbsp;touch</div>
                    </button>

                </div>

                {/* </div> */}



            </div>






        </header >
    )
}

export default Header;