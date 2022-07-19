import React from "react";


const Header = ({ setScroll }) => {

    const handleClick = () => { setScroll(prevScroll => prevScroll + 1); }

    return (
        <header className=" text-gray-600 font-ubuntu h-auto px-10 sm:px-16 md:px-28 pt-12 sm:pt-20 pb-16 sm:pb-24 md:pb-32 mx-auto flex-col justify-around max-w-7xl min-w-[350px]">

            <h1 className="mt-5 mb-1 md:my-10 text-2xl sm:text-3xl md:text-4xl text-center lg:text-left">Hey there 👋</h1>
            <div className="flex justify-between">
                <h2 className="my-10 text-2xl sm:text-3xl md:text-4xl text-center lg:text-left sm:leading-relaxed md:leading-relaxed font-light max-w-2xl">
                    I'm <div className="inline text-indigo-600 font-medium">Mohamed Waleed</div>, a self taught frontend developer who loves building beautiful user interfaces, web applications and everything in between.
                </h2>
                <img className="hidden h-48 my-10" src="https://www.freepnglogos.com/uploads/thinking-png/thinking-get-started-with-marketing-for-new-retail-business-owners-8.png" alt="me" />
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