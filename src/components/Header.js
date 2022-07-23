import React from "react";
import { ReactComponent as Avatar } from "../images/waleedavatar.svg";
import { ReactComponent as Blob } from "../images/blob.svg";


const Header = ({ setScroll }) => {

    const handleClick = () => { setScroll(prevScroll => prevScroll + 1); }

    return (
        <header className=" text-gray-600 font-ubuntu h-auto px-10 sm:px-16 md:px-28 pt-12 sm:pt-20 pb-16 sm:pb-24 md:pb-32 mx-auto flex-col justify-around max-w-7xl min-w-[350px]">

            <h1 className="mt-5 mb-1 md:my-10 text-2xl sm:text-3xl md:text-4xl text-center lg:text-left">Hey there 👋</h1>
            <div className="flex justify-between">
                <h2 className="my-10 text-2xl sm:text-3xl md:text-4xl text-center lg:text-left sm:leading-relaxed md:leading-relaxed font-light max-w-2xl">
                    I'm <div className="inline text-indigo-600 font-medium">Mohamed Waleed</div>, a self taught frontend developer who loves building beautiful user interfaces, web applications and everything in between.
                </h2>
                <div className="hidden lg:block my-10">
                    <Blob className="lg:w-64 xl:w-72 h-80 absolute" />
                    <Avatar className="lg:w-64 xl:w-72 h-80 relative lg:bottom-7 lg:right-3 xl:right-3 xl:bottom-8 pr-2" />
                </div>

            </div>
            <div className="mb-6 md:my-10 w-[170px] mx-auto pl-4 md:pl-0 lg:mx-0 text-xl md:text-2xl">

                <button className="bg-indigo-600 text-gray-100 h-10 md:h-14 px-4 md:py-2 shadow-xl hover:bg-gray-50 hover:text-indigo-600 hover:border-indigo-600 hover:border-2"
                    onClick={handleClick}
                >
                    Get in touch
                </button>

            </div>


        </header>
    )
}

export default Header;