import React from "react";
import MyHero from "../images/waleed.jpg";


const Header = ({ setScroll }) => {

    const handleClick = () => { setScroll(prevScroll => prevScroll + 1); }

    return (
        <header className="relative text-gray-200 font-quicksand px-10 sm:px-16 md:px-28 pt-8 xl:pt-6 pb-16 sm:pb-24 md:pb-32 mx-auto flex-col justify-around max-w-9xl min-w-[350px] z-10">


            <div className="flex-col justify-center xl:justify-between xl:flex xl:flex-row-reverse xl:py-12">


                <img src={MyHero} alt="Hero" className="relative h-36 sm:h-60 xl:h-72 mx-auto my-auto z-10" />



                <div className="my-auto z-10 xl:pr-8">

                    <h2 className="z-10 py-6 text-lg sm:text-2xl md:text-2xl mx-auto text-center xl:text-right sm:leading-relaxed md:leading-relaxed font-light max-w-2xl">
                        I'm a self taught developer who loves building beautiful user interfaces, web applications and everything in between.
                    </h2>


                    <div className="md:my-6 sm:mt-3 md:mt-5 w-32 sm:w-[136px] md:w-40 text-xl sm:text-2xl md:text-3xl mx-auto xl:float-right">

                        <button className="bg-transparent h-10 md:h-14 px-4 md:py-2 shadow-xl border-2 transition ease-in-out hover:scale-110 border-green-300 hover:bg-green-300 text-green-300 hover:text-black"
                            onClick={handleClick}  >
                            <div className="font-caveat">Get in touch</div>
                        </button>

                    </div>

                </div>



            </div>






        </header>
    )
}

export default Header;